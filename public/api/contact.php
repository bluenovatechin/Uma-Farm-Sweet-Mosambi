<?php
/**
 * Uma Farm Sweet Mosambi - Wholesale Inquiry API Endpoint
 * For Hostinger hPanel PHP Environment
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please use POST.'
    ]);
    exit;
}

// Receive payload from JSON or standard form POST
$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

// 1. Spam protection: Honeypot check
$honeypot = trim($input['website'] ?? '');
if (!empty($honeypot)) {
    // Silently reject bots without revealing failure
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for reaching out.'
    ]);
    exit;
}

// Extract and sanitize fields
$name     = htmlspecialchars(trim($input['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$phone    = htmlspecialchars(trim($input['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$type     = htmlspecialchars(trim($input['type'] ?? ''), ENT_QUOTES, 'UTF-8');
$business = htmlspecialchars(trim($input['business'] ?? ''), ENT_QUOTES, 'UTF-8');
$qty      = htmlspecialchars(trim($input['qty'] ?? ''), ENT_QUOTES, 'UTF-8');
$city     = htmlspecialchars(trim($input['city'] ?? ''), ENT_QUOTES, 'UTF-8');
$notes    = htmlspecialchars(trim($input['msg'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validation
$errors = [];
if (mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your full name.';
}
if (!preg_match('/^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/', $phone)) {
    $errors['phone'] = 'Please enter a valid 10-digit mobile number.';
}
if (empty($qty)) {
    $errors['qty'] = 'Please specify the quantity needed.';
}
if (mb_strlen($city) < 2) {
    $errors['city'] = 'Please enter your delivery city.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'errors'  => $errors,
        'message' => 'Please correct the highlighted errors.'
    ]);
    exit;
}

// Format message
$timestamp = date('Y-m-d H:i:s T');
$entry = [
    'time'     => $timestamp,
    'name'     => $name,
    'phone'    => $phone,
    'type'     => $type,
    'business' => $business,
    'qty'      => $qty,
    'city'     => $city,
    'notes'    => $notes,
    'ip'       => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

// Optional: Store in log file inside a protected data folder
$logDir = __DIR__ . '/../_data';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
    // Protect data folder from direct web access
    @file_put_contents($logDir . '/.htaccess', "Deny from all\n");
}
$logFile = $logDir . '/inquiries.jsonl';
@file_put_contents($logFile, json_encode($entry) . PHP_EOL, FILE_APPEND | LOCK_EX);

// Optional: Send email notification via Hostinger mail
$recipient = 'info@umafarm.com'; // Or farm email
$subject   = 'New Mosambi Inquiry from ' . $name . ' (' . $city . ')';
$mailBody  = "Wholesale Mosambi Inquiry - Uma Farm\n\n"
           . "Name: {$name}\n"
           . "Phone: {$phone}\n"
           . "Buyer Type: {$type}\n"
           . ($business ? "Business: {$business}\n" : "")
           . "Quantity: {$qty}\n"
           . "Delivery City: {$city}\n"
           . ($notes ? "Notes: {$notes}\n" : "")
           . "Submitted At: {$timestamp}\n";

$headers   = 'From: Uma Farm Website <no-reply@umafarm.com>' . "\r\n"
           . 'X-Mailer: PHP/' . phpversion();

@mail($recipient, $subject, $mailBody, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Inquiry received successfully! We will contact you soon.',
    'whatsapp_url' => 'https://wa.me/919426040220?text=' . urlencode(
        "Wholesale mosambi inquiry (umafarm.com)\n" .
        "Name: {$name}\n" .
        ($business ? "Business: {$business}\n" : "") .
        "Buyer type: {$type}\n" .
        "Quantity: {$qty}\n" .
        "Delivery city: {$city}\n" .
        "Phone: {$phone}\n" .
        ($notes ? "Notes: {$notes}\n" : "")
    )
]);
