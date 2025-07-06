<!DOCTYPE html>
<html>
<head>
    <title>Contact Form Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #e9ecef;
            border-radius: 5px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Message from Alpha DDSI</h2>
    </div>

    <div class="content">
        <p><strong>From:</strong> {{ $name }} ({{ $email }})</p>
        <p><strong>Subject:</strong> {{ $subject }}</p>
        
        <div style="margin-top: 20px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">{{ $messageContent }}</p>
        </div>
    </div>

    <div class="footer">
        <p>This email was sent from the contact form on Alpha DDSI website.</p>
    </div>
</body>
</html> 