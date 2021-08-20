---
layout: default
home: false
---
<!--add extra play stylesheet specific to this page-->
<head>
    <link rel="stylesheet" href="{{ '/assets/css/play.css' | prepend: site.baseurl }}">
</head>

<p class="w-8/12 pb-2 font-mono">
    I'm working on several projects in my free time.
</p>
<br>
<hr>
<!--hypewriter section-->
<div class="project">
<h1 class="text-5xl">
    <a id="hypewriter" href="https://github.com/serviceberry3/hypewriter">The HypeWriter</a>
</h1>
<p class="project-content">I'm taking an old Royal Safari typewriter and digitizing it by adding an array of buttons on the underside of the machine.
    When a key is pressed, it hits a button that triggers a specific voltage input for an Arduino (Elegoo, actually) Nano. 
    The letter will appear on an LCD dislay, and it will look like the typewriter is "stamping" the display. An interface will 
    be created allowing the user to create files on an SD card and write text, and also pan around within the file. The carriage
    is controlled via I2C connection to an NXT brick and two old NXT servos I had, which turn two spools of fishing line.
    An end goal is to convert the entire thing into either a standard USB keyboard or a bluetooth keyboard.</p>
</div>
<div class="project">
<h1 class="text-5xl">
    <a id="indygo" href="https://github.com/serviceberry3/indygo_punctuality">IndyGo Punctuality</a>
</h1>
<p class="project-content">This is a website that uses PHP web scraping to analyze the punctuality of <a href="https://www.indygo.net">
    IndyGo</a> buses. Running on an Ubuntu home server, served by Apache2.</p>
</div>
<div class="project">
<h1 class="text-5xl">
    <a id="shen" href="https://github.com/serviceberry3/shenandoahthepri.us">Adventures of Shenandoah the Prius</a>
</h1>
<p class="project-content">This is a Ruby on Rails website to track all of the GPX tracks my Prius has driven, display them on a map, attach blog 
    posts to certain locations, and create stats about the car. Hosted on a home server, served by Nginx->Phusion Passenger 
    on a Vagrant VM.</p>
</div>
<div class="project">
<h1 class="text-5xl">
    <a id="marty" href="https://github.com/serviceberry3/marty-davidson">Marty Davidson</a>
</h1>
<p class="project-content">My longest ongoing project. An iMessage auto-reply robot which can store and retrieve users’ information in a database, 
    call users and deliver automated robotic messages, schedule appointments, and remotely control an LED display. Works on old and new
    versions of MacOS. Working on creating a version for Android.
</p>
</div>
<div class="project">
<h1 class="text-5xl">
    <a id="bob" href="https://github.com/serviceberry3/bob_come_home">Bob, Come Home!</a>
</h1>
<p class="project-content">Robert T. Builder was a once-neglected childhood plush toy who came to popularity in the late 2010s. He was 
    loved by exchange students, Yale students, and <a href="https://www.nchs.cc">North Central High 
    School</a> students alike. Best known for his love 
    of hot tubs, travel, and laid-back party hosting, he was misplaced in a warehouse in 2020. Come home, Bob. We miss you.
    In loving memory: a Flask site served by Nginx->Gunicorn on a Vagrant VM running on a home server.</p>
</div>
<div class="project">
<h1 class="text-5xl">
    <a id="satphone" href="https://github.com/serviceberry3/iridium_android_sbd">The Modern Sat Phone</a>
</h1>
<p class="project-content">I'm creating an app to host an Iridium A3LA-X satellite modem on an Android device via USB and use Short Burst Data service in 
    the wilderness! This one has been heavily stalled by the difficulty of finding a reasonably priced coax cable that 
    connects the modem to the antenna.</p>
</div>
<div class="project">
<h1 class="text-5xl">
    Low-Stakes Messenger
</h1>
<p class="project-content">Have you noticed that read receipts are mandatory on Facebook Messenger? I believe texting should be a low-stakes, pressure-free activity, so I'm working
    on a workaround (ha) to avoid sending read receipts. It was previously possible by <a href="https://github.com/raphaelrk/messenger-lowkey">simply blocking 
    a few HTTP requests from Facebook's servers</a>, but that no longer works...
</p>
</div>

<script src="{{ '/assets/js/play.js' | prepend: site.baseurl }}"></script>

