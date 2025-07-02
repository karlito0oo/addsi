<?php

// Load Composer's autoloader FIRST
require_once __DIR__ . '/vendor/autoload.php';

// Load .env
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// CORS headers
header('Access-Control-Allow-Origin: ' . $_ENV['APP_FRONTEND']);
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}


// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['GMAIL_USERNAME'];
    $mail->Password = $_ENV['GMAIL_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($data['email'], $data['name']);
    $mail->addAddress($_ENV['SEND_TO']); // Your email address
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Portfolio Contact: " . $data['subject'];
    
    // Email body
    $body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {$data['name']}</p>
    <p><strong>Email:</strong> {$data['email']}</p>
    <p><strong>Subject:</strong> {$data['subject']}</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($data['message'])) . "</p>
    ";
    
    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
} 