<template>
<project
    homepage="https://sourceforge.net/projects/basszxtune/"
>
<p>
    BASSZXTUNE is an add-on for BASS audio library
    (<ext-link href="https://www.un4seen.com/bass.html"/>).
    It adds support for several
    <ext-link href="https://en.wikipedia.org/wiki/Chiptune">chiptune</ext-link> file formats.
    This add-on is based on ZXTune library.
    So all credit goes to ZXTune project and its developer at
    <ext-link href="https://zxtune.bitbucket.io/"/>
    and also to all the authors of the third-party libraries.
</p>
<p>
    The add-on can play chiptune files in various formats:
</p>
<ul>
    <li>ZX Spectrum (ay, ym, scl, ...)</li>
    <li>Commodore 64 (sid)</li>
    <li>Amiga (mod, ahx, hvl)</li>
    <li>Atari (sap, rmt, ...)</li>
    <li>NES (nsf, nsfe, spc)</li>
    <li>GameBoy (gsf)</li>
    <li>PlayStation (psf, minipsf, ...)</li>
    <li>
        ... and a lot more.
        See the <ext-link href="https://sourceforge.net/projects/basszxtune/">project's homepage</ext-link>
        or <ext-link href="https://bitbucket.org/z80maniac/zxtune/src/master/apps/plugins/common/pluginbase.h#lines-51">the source code</ext-link>.
    </li>
</ul>
<p>
    This add-on has several limitations by design.
    BASS add-on system only has support for "stream" add-ons and not for "module" or "tracker" add-ons.
    It means that module/tracker files will be treated as streams.
    But a module cannot be loaded partially,
    so the whole "stream" needs to be loaded into memory before starting a playback.
</p>
<p>
    This imposes the following limitations:
</p>
<ul>
    <li>
        Even if an extension is marked as supported,
        there's no guarantee that the file contents can be understood by the add-on.
    </li>
    <li>Buffered streams (STREAMFILE_BUFFER, STREAMFILE_BUFFERPUSH, etc) are not supported.</li>
    <li>Streaming in blocks (BASS_STREAM_BLOCK) is not supported.</li>
    <li>Internet streams (BASS_StreamCreateURL) are not supported.</li>
    <li>Only mono and stereo output, no access to separate module channels.</li>
    <li>
        The add-on supports only single-file formats.
        To play multi-file formats (e.g. *.minipsf + *.psflib)
        you may archive all files into any supported archive (zip, 7z, tar, gz, rar)
        optionally changing the extension of the archive to a supported extension (e.g. *.psf).
    </li>
</ul>
<p>
    The list of supported platforms:
</p>
<ul>
    <li>MS Windows 10 i686 &amp; x86_64</li>
    <li>Linux i686 &amp; x86_64</li>
    <li>OSX x86_64</li>
    <li>Android arm_v7a &amp; i686</li>
</ul>
<p>
    Android support is only for native code,
    i.e. loading the library from Java code is not guaranteed to work.
</p>
<p>
    To build the add-on from the sources by yourself follow these
    <ext-link href="https://bitbucket.org/z80maniac/zxtune/src/master/apps/plugins/BUILD.TXT">instructions</ext-link>.
</p>
<p>
    Find more info and support on the
    <ext-link href="https://www.un4seen.com/forum/?topic=15694.0">un4seen forum page</ext-link>.
</p>
</project>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({
    components: {
        Project: () => import('~/components/Project.vue'),
        ExtLink: () => import('~/components/ExtLink.vue')
    }
})
export default class extends Vue {}
</script>
