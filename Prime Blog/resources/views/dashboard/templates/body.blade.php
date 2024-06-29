<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
    <link rel="stylesheet" href="../../../../../../../css/bootstrap.css">
    <link rel="stylesheet" href="../../../../../../../css/dashboard.css">
    <link rel="icon" href="../../../../../../../favicon.png">
</head>
<body>
    @include('dashboard.templates.navbar')
    @include('dashboard.templates.sidebar')

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        @yield('content')
    </main>
    </div>
    </div>

    <script src="../../../../../../../../../../js/bootstrap.js"></script>
    <script src="../../../../../../../../../../../js/dashboard.js"></script>
</body>
</html>