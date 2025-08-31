<template>
<Project
    homepage="https://gpufanmeister.alkatrazstudio.net"
    :screenshots="screenshots"
>
<p>
    GPU Fan Meister lets you control your video card fan speed using a curve,
    a script or a set of predefined rules.

    With GPU Fan Meister you can
    describe a graph of fan speed versus temperature,
    set your own algorithm for calculating the required speed
    or set up one of the preset modes of operation.
</p>
<p>
    This application itself does not support any video cards,
    but the support can be added via plugins.
    And that's the main point.
    The functionality of GPU Fan Meister can be extended
    via scripts and custom functions from plugins.
    Read more about the scripting capabilities and custom functions in
    <ExtLink href="https://gpufanmeister.alkatrazstudio.net/doc/user/modes/script/reference.html#script-ref-dev-customfunction">the documentation</ExtLink>.
    The process of adding plugins is also
    <ExtLink href="https://gpufanmeister.alkatrazstudio.net/doc/dev/plugins.html">documented</ExtLink>.
</p>
<p>
    Currently, a plugin for NVIDIA video card is bundled with GPU Fan Meister.
    Read about this plugin
    <ExtLink href="https://gpufanmeister.alkatrazstudio.net/doc/user/plugins/nvidia-nvml.html">here</ExtLink>.
</p>
<p>
    The application uses QML for its GUI,
    however the GUI is only loaded when its needed,
    so memory consumption is kept at minimum.
</p>
<p>
    The documentation is also available offline.
    It's accesible via the application's tray context menu.
</p>
<p>
    <strong>Note:</strong>
    GPU Fan Meister is only available for Linux with X Window System.
    Also, you may need to install Python 3 and libnotify package
    for this application to work
    (but these are usually come preinstalled in any mainstream Linux distro).
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'curve',
    label: '"Curve" mode'
}, {
    name: 'fanToggle',
    label: '"Fan toggle" mode'
}, {
    name: 'script',
    label: '"Script" mode'
}, {
    name: 'options',
    label: 'Options screen'
}]
</script>
