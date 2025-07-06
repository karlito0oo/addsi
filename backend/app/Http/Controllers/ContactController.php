<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function sendMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        try {
            Mail::send('emails.contact', [
                'name' => $request->name,
                'email' => $request->email,
                'subject' => $request->subject,
                'messageContent' => $request->message
            ], function ($message) use ($request) {
                $message->from($request->email, $request->name);
                $message->to(config('mail.from.address'), config('mail.from.name'));
                $message->subject("Contact Form: {$request->subject}");
            });

            return response()->json(['message' => 'Message sent successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to send message'], 500);
        }
    }
} 