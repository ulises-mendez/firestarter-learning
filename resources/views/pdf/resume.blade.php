<html>
    @php
        $months = array('','Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    @endphp
<head>
    <style>
        @page {
            margin: 0cm 0cm;
        }
        body {
            /*
            background-image: url('img/HM-Renddy.jpg');
            background-size: 100% auto;
            background-position: top left;
            background-repeat: no-repeat;
            */
            padding: 20mm 17mm 20mm 17mm;
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
        .name{
            font-size: 14pt;
            font-weight: bold;
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

    </style>
</head>
<body>
<main>
    <table style="width:100%;border-bottom:1pt solid #c2c2c2;">
        <tbody style="width:100%">
            <tr>
                <td style="width:100%;vertical-align: top">
                    <h1 class="name">{{ $name }}</h1 >
                    <p style="letter-spacing: 0.2em;">PERSONAL TITLE</p>
                </td>
                <td style="width:auto%;text-align: right">
                    <div style="width: 100%">
                        <table style="margin-top: 2mm;border-collapse: separate;width:100%">
                            <tr>
                                <td style="vertical-align: top">
                                    <img src="img/resume/marker.png" style="width: 8pt"/>
                                </td>
                                <td style="vertical-align: top">
                                    <span>{{$address}}, {{ $city }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: top">
                                    <img src="img/resume/envelope.png" style="width: 8pt"/>
                                </td>
                                <td style="vertical-align: top">
                                    <span>{{$email}}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: top">
                                    <img src="img/resume/phone.png" style="width: 8pt"/>
                                </td>
                                <td style="vertical-align: top">
                                    <span>+1 55 4403 1416  </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
            
        </tbody>
    </table>
    <table class="table">
        <tbody>
            <tr>
                <td class="left">
                    @if($profile)
                        <div class="works">
                            <h3>PROFILE</h3>
                        </div>
                    @endif
                    @if($skills->count() > 0)
                    <div class="works">
                        <h3>SKILLS</h3>
                    </div>
                    @foreach ($skills as $skill)
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <h4 style="margin:0">{{ $skill->name }}</h4>
                                </td>
                                @if($skill->years !== null)
                                    @if($skill->years < 1)
                                    <td>(Less than a year)</td>
                                    @endif
                                    @if($skill->years == 1)
                                    <td>(1 year)</td>
                                    @endif
                                    @if($skill->years > 1)
                                        @if($skill->years < 10)
                                            <td>({{$skill->years}} years)</td>
                                        @endif
                                        @if($skill->years == 10 )
                                            <td>(10 years or more)</td>
                                        @endif
                                    @endif
                                @endif
                            </tr>
                        </table>
                    </div>
                    @endforeach
                    @endif
                </td>
                <td class="right">
                    <div class="works">
                        <h3>WORK EXPERIENCE</h3>
                    </div>
                        @foreach ($works as $work)
                        <div style="margin-bottom: 10pt">
                            <table>
                                <tr>
                                    <td>
                                        <h4 style="margin:0">{{ $work->title}}</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#828282">
                                        <span>{{$work->company_name}}</span><span> - {{ $work->city }}</span>
                                        <span> | {{$months[$work->from_month]}} {{$work->from_year}}
                                        @if ($work->currently)
                                         to Present
                                        @endif
                                        @if (!$work->currently)
                                        – 
                                        {{$months[$work->to_month]}} 
                                        {{$work->to_year}}
                                        @endif
                                        </span>
                                    </td>
                                </tr>
                            </table>
                            <table>
                                <div>
                                    {{ $work->description }}
                                </div>
                            </table>
                        </div>
                        @endforeach
                    @if($education->count() > 0)
                        <div class="works">
                        <h3>EDUCATION AND TRAINING</h3>
                    </div>
                    @endif
                    @foreach ($education as $education)
                    <div style="margin-bottom: 10pt">
                        <table>
                            <tr>
                                <td>
                                    <h4 style="margin:0">{{$education->level}} in {{$education->field}}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="color:#828282">
                                        {{$education->college}} - {{$education->city}}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        {{$months[$education->from_month]}} 
                                        {{$education->from_year}}
                                        @if ($education->currently)
                                         to Present
                                        @endif
                                        @if (!$education->currently)
                                        – 
                                        {{$months[$education->to_month]}} 
                                        {{$education->to_year}}
                                        @endif
                                       </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    @endforeach
                    
                </td>
              </tr>
        </tbody>
    </table>
</main>

</body>
</html>

