<?php
header('Content-Type: application/json');

try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = trim(strip_tags($_POST["name"] ?? ''));
        $email = trim($_POST["email"] ?? '');
        $subject = trim(strip_tags($_POST["subject"] ?? ''));
        $message = trim(strip_tags($_POST["message"] ?? ''));

        // Check if gdpr is checked
        if (empty($_POST["zpracovaniUdaju"])) {
            http_response_code(400);
            echo json_encode(["message" => "You must agree with personal data processing."]);
            exit;
        }

        // Validate input
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            http_response_code(400);
            echo json_encode(["message" => "All fields must be filled in."]);
            exit;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(["message" => "Invalid email address."]);
            exit;
        }

        // Prevent header injection
        if (preg_match('/[\r\n]/', $name . $email . $subject)) {
            http_response_code(400);
            echo json_encode(["message" => "Invalid characters in input."]);
            exit;
        }

        $to = "prodej@clinipharma.cz";
        $mailSubject = "Clinipharma.eu - $subject";
        $body = "Jméno: $name\nKontakt: $email\nZpráva:\n$message";
        $headers = "From: noreply@clinipharma.eu\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $mailSubject, $body, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "Form has been successfully submitted. Thank you for contacting us. We will get back to you as soon as possible."]);
        } else {
            error_log("Email sending failed for contact form submission.");
            http_response_code(500);
            echo json_encode(["message" => "An error occurred while sending the form. Please try again later."]);
        }
    } else {
        http_response_code(405);
        echo json_encode(["message" => "Invalid request method."]);
    }
} catch (Exception $e) {
    error_log("Error in mail.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["message" => "An unexpected error occurred. Please try again later."]);
}
?>