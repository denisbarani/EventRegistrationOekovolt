<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9fafb;
      color: #2d2d2d;
      margin: 0;
      padding: 24px;
    }
    .container {
      max-width: 600px;
      background: #ffffff;
      border-radius: 12px;
      margin: auto;
      padding: 32px 40px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    h1 {
      color: #4f7942; /* softer green */
      font-weight: 700;
      font-size: 26px;
      margin-bottom: 28px;
   

      @media(max-width:768px){
        font-size: 16px;
      }
    }
    .field-label {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      color: #4f7942;
      font-size: 15px;
      margin-top: 22px;
    }
    .field-content {
      font-size: 15px;
      color: #333333;
      margin-top: 6px;
      white-space: pre-line;
      line-height: 1.5;
    }
    /* Person icon styling */
    .icon-person {
      width: 20px;
      height: 20px;
      stroke: #4f7942;
      stroke-width: 1.8;
      fill: none;
    }
    /* Reply button: subtle green border + text, transparent bg */
    .reply-button {
      display: inline-block;
      margin-top: 36px;
      padding: 12px 32px;
      font-weight: 600;
      font-size: 16px;
      color: #4f7942;
      border: 2px solid #4f7942;
      border-radius: 40px;
      text-decoration: none;
      transition: background-color 0.3s ease, color 0.3s ease;
      text-align: center;
      cursor: pointer;

        @media(max-width:768px){
        font-size:15px;
      }
    }
    .reply-button:hover {
      background-color: #4f7942;
      color: #fff;
    }
    .footer {
      margin-top: 44px;
      font-size: 12px;
      color: #888888;
      text-align: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 14px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Neue Veranstaltungsanmeldung</h1>

    <div class="field-label">
      <!-- Person Icon (outline style) -->
      <svg
        class="icon-person"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
      </svg>
      Name:
    </div>
    <div class="field-content">{{from_name}}</div>

    <div class="field-label">E-Mail-Adresse:</div>
    <div class="field-content">{{from_email}}</div>

    <div class="field-label">Telefonnummer:</div>
    <div class="field-content">{{phone}}</div>

    <div class="field-label">Zusätzliche Informationen:</div>
    <div class="field-content">{{additional_info}}</div>

    <a
      href="mailto:{{from_email}}?subject=Antwort%20zu%20Ihrer%20Veranstaltungsanmeldung"
      class="reply-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Antwort senden
    </a>

    <div class="footer">
      Diese E-Mail wurde automatisch generiert am {{timestamp}}.
    </div>
  </div>
</body>
</html>
