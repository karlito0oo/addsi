<!DOCTYPE html>
<html>
<head>
    <title>{{ setting('inquiry_email_subject') }}</title>
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
            text-align: center;
            margin-bottom: 20px;
        }
        .content {
            padding: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>{{ setting('inquiry_email_header') }}</h2>
    </div>

    <div class="content">
        <p>Dear {{ $name }},</p>

        {!! str_replace('[subject]', $subject, setting('inquiry_email_body')) !!}

        <p>For your reference, here is a copy of your message:</p>
        <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc; margin: 15px 0;">
            {{ $messageContent }}
        </blockquote>

        <p>{!! setting('inquiry_email_signature') !!}</p>
    </div>

    <div class="footer">
        <p>{{ setting('inquiry_email_footer') }}</p>
    </div>
</body>
</html> 