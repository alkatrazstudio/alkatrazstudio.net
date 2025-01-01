<template>
<Project
    homepage="https://github.com/alkatrazstudio/polarmon"
    :screenshots="screenshots"
>
<p>
    PolarMon connects to your Polar H10 device
    and displays heart rate (HR) and electrocardiogram (ECG) data from its sensors
    with the ability to save the HR data.
</p>
<p>
    Polar H10 has the official mobile app, but it's very bloated
    and constantly asks you to enable Google geolocation services (even after you decline).
    It was very inconvenient to use and as in many similar cases I decided to write my own app.
</p>
<p>
    Features:
</p>
<ul>
    <li>Show heart rate (HR) in real time with the resolution of 1 sample per second.</li>
    <li>Show electrocardiogram (ECG) in real time with the resolution of 130 samples per second.</li>
    <li>Record HR graph in background (the app may be closed meanwhile).</li>
    <li>Manage and analyze the saved recordings.</li>
    <li>Place markers on the graph during recording.</li>
</ul>
<p>
    More current info in the repository.
</p>
<p>
    The source for this app is FLOSS, but the app itself is not.
    The app uses <ExtLink href="https://github.com/polarofficial/polar-ble-sdk">polar-ble-sdk</ExtLink>
    which has a Non-FLOSS license (but the source is still open).
    This is also the reason why this project is licensed under MPLv2, rather than the usual GPLv3.
    Also keep in mind that this is not a medical device.
    Polar H10 measures heart rate pretty accurately (not sure about ECG),
    but don't rely on it too much for actual medical assistance.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'hr',
    label: 'Measuring heart rate'
}, {
    name: 'ecg',
    label: 'Displaying electrocardiogram'
}, {
    name: 'recording',
    label: 'A saved recording'
}, {
    name: 'recordings',
    label: 'A list of saved recordings'
}, ]
</script>
