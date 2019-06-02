<template>
<project
    homepage="https://sourceforge.net/projects/volstep/"
>
<p>
    Volume Step Adjuster allows you to adjust the increment/decrement step
    of your system volume when you use your multimedia keys.
    By default, this step is 2% or 4%, which may not be appropriate for high precision setting.
    With Volume Step Adjuster you can set this volume step to any valid value,
    for example, you can set the volume step to 1% or even 0.1%.
    The real available volume step resolution depends on your device.
</p>
<p>
    Note, however, that this tool only configures increment/decrement step.
    It does not adjust increment/decrement speed or any other parameters.
</p>
<p>
    This program will only run on Windows 7 and, probably, later versions.
    This app may work incorrectly or may not work at all
    if you're running any programs that intercept volume control multimedia keys input.
</p>
<p>
    Read README.DIZ before use!
</p>
</project>
</template>

<script lang="ts">
import {Component, mixins} from 'nuxt-property-decorator'
import {Screenshot, project} from '~/components/Project.vue'

@Component
export default class extends mixins(project) {}
</script>
