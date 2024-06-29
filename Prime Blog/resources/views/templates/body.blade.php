<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
    <link rel="stylesheet" href="../../../../../../../../css/bootstrap.css">
    <link rel="icon" href="../../../../../../../favicon.png">
</head>
<body>
    @include('templates.navbar')

    <div class="container mt-4">
        @yield('content')
    </div>

    <script src="../../../../../../../../../../js/bootstrap.js"></script>
</body>
</html>