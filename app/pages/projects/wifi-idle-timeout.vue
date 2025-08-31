<template>
<Project
    homepage="https://sourceforge.net/projects/wifiidletimeout/"
    :screenshots="screenshots"
>
<p>
    This Android application will turn your Wi-Fi off when no application is actively using Wi-Fi
    for a certain amount of time while the screen is off.
</p>
<p>
    The application takes a wild guess and assumes that if Wi-Fi data transfer rate
    is less than 64KiB per minute for 15 minutes in a row
    then it means that there are no applications that actively use Wi-Fi.
    If Wi-Fi was turned off by the application,
    the connection will be restored again once the screen is on.
</p>
<p>
    Also, if there's no Wi-Fi connection within 1 minute
    then this aplication will turn Wi-Fi off too.
</p>
<p>
    For some devices the timings may be slightly different.
</p>
<p>
    Google Play page:<br>
    <img class="qr" src="~/assets/projects/wifi-idle-timeout/qr.png" alt="QR code"/><br>
    <ExtLink href="https://play.google.com/store/apps/details?id=net.alkatrazstudio.wifiidletimeout"/>
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'main',
    label: 'Main screen'
}]
</script>
