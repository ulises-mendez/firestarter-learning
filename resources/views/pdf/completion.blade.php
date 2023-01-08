<html>
    @php
        $months = array('','Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    @endphp
<head>
    <style>
        @page {
            margin: 0cm 0cm;
        }
        @font-face {
            font-family: 'Great Vibes';
            src: url('/fonts/greatvibes-regular-webfont.woff2') format('woff2'),
                url('/fonts/greatvibes-regular-webfont.ttf') format('truetype')
                url('/fonts/greatvibes-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
        font-family: 'PlayfairDisplay-Regular';
        src: url('/fonts/PlayfairDisplay-Regular.woff2') format('woff2');
        src: url('/fonts/PlayfairDisplay-Regular.woff') format('woff');
        src: url('/fonts/PlayfairDisplay-Regular.ttf') format('truetype');
        }


        body {
            background-image: url('img/completion.jpg');
            background-size: 100% 100%;
            background-position: top left;
            background-repeat: no-repeat;

            padding: 25mm 17mm 25mm 17mm;
            text-align: justify;
            font-family: 'Open Sans', sans-serif;
            font-size: 8pt;
            color:rgb(31, 41, 55);
        }
        .underline {
            text-decoration-line: underline;
            text-decoration-style: solid;
        }
        hr {
            page-break-after: always;
            border: 0;
            margin: 0;
            padding: 0;
        }
        .table{
            margin-top: 2mm;
            width: 100%;
        }
        .left{
            width: 41mm;
            vertical-align: top;
            padding-right: 5mm
        }
        .right{
            width: 121mm;
            border-left: 1pt solid #c2c2c2;
            padding: 0 0 0 9mm; 
        }
        .works{
            border-bottom: 1pt solid #c2c2c2;
            margin-bottom: 2mm;
        }
        .contact{
            font-weight: bold;
            padding-bottom: 0mm;
            border-bottom: 1pt solid #aeaeae;
        }
        .completion{
            color:#EB6100; 
            font-size:14pt;
            margin-top:-2pt;
            letter-spacing: 0.2em;
        }
        .cert{
            font-family: 'PlayfairDisplay-Regular', sans-serif;
            font-size: 24pt;
            font-weight: 100;
            letter-spacing: 0.5em;
            margin: none;
        }
        .presented{
            font-family: 'PlayfairDisplay-Regular', sans-serif;
            font-size: 13pt;
            font-weight: 100;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }
        .name{
            font-family: 'Great Vibes';
            font-size:22pt;
            font-weight: normal;
            font-style: normal;
        }
    </style>
</head>
<body>
<main>
    <table style="width:100%">
        <tbody style="width:100%">
            <tr>
                <td style="width:100%;text-align:center;padding:40pt" colspan="2">
                    <img src="{{ public_path("firestarter_logo.png") }}" style="width:180px">
                </td>
            </tr>
            <tr>
                <td style="width:100%;text-align:center" colspan="2">
                    <p class="cert">CERTIFICATE</p>
                    <p class="completion">OF COMPLETION</p>
                </td>
            </tr>
            <tr>
                <td style="width:100%;text-align:center;" colspan="2">
                    <span class="presented">This certificate is proudly presented to:</span>
                </td>
            </tr>
            <tr>
                <td style="width:100%;text-align:center;" colspan="2">
                    <span class="name">Mariam Jhonson</span>
                </td>
            </tr>
            
            <tr>
                <td style="width:100%;text-align:center;" colspan="2">
                    <p style="font-size:17pt;margin-bottom:-10pt;color:#EB6100;font-weight:bold">Leadership Strategies for Women</p>
                    <p style="font-size:11pt">Course completed on Nov 10, 2022 at 02:38AM UTC • 1 hour 6 min</p>
                </td>
            </tr>

            <tr>
                <td style="width:100%;text-align:center;" colspan="2">
                    <p style="font-size:12pt;width:60%;margin:auto;color:#EB6100;margin-bottom:40pt">By continuing to learn, you have expanded your perspective, sharpened your skills, and made yourself even more in demand.</p>
                </td>
            </tr>

            <tr>
                <td style="width:50%;text-align:right;border-right: 2px solid #000;padding-right:20pt">
                    <img src="{{ public_path("img/firm.jpg") }}" style="width:120px;margin-right:15pt">
                    <p>Head of Content Strategy, Learning</p>
                </td>
                <td style="width:50%;text-align:left;padding-left:20pt">
                    <p>FIRE<span style="font-weight: bold">STARTER</span> LEARNING</p>
                    <p>1375 Maynard Rd</p>
                    <p>AB T2E 6J8</p>
                </td>
            </tr>
            
        </tbody>
    </table>
</main>

</body>
</html>

