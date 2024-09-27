<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import _ from '$lib/lang';
  import { AudioIcon, Buttons, Button, ButtonIcon } from '$lib/components';
  import {
    GithubIcon,
    MailIcon,
    FacebookIcon
  } from '$lib/components/icons';
  import namePronunciationAudio from '../../../assets/audio/rendiichtiar.mp3';
  import InstagramIcon from '../icons/instagram-icon.svelte';

  const instagramUrl = 'https://instagram.com/rendiichtiar';
  const socials = [
    {
      icon: FacebookIcon,
      href: 'https://facebook.com/rendiichtiar'
    },
    {
      icon: GithubIcon,
      href: 'https://github.com/rendiichtiarp'
    },
    {
      icon: MailIcon,
      href: 'mailto:rendiichtiarprasetyo@gmail.com'
    }
  ];

  $: showAudioButton = $_.code == 'en';
  const audio = browser && new Audio(namePronunciationAudio);
  const onClickAudioButton = () => audio && audio.play();

  const getAge = (birthday: Date) => {
    const today = new Date();
    const month = today.getMonth() - birthday.getMonth();
    let age = today.getFullYear() - birthday.getFullYear();
    if (month < 0 || (month == 0 && today.getDate() < birthday.getDate())) age--;
    return age;
  };
  const age = getAge(new Date('2007-05-30'));

  onMount(() => {
    if (!browser || !audio) return;
    audio.volume = 0.5;
  });
</script>

<div class="blurb-info">
  <h1 class="name">
    {$_.blurb.title}
    {#if showAudioButton}
      <button class="audio" on:click={onClickAudioButton} aria-label={$_.alt.audioButton}>
        <AudioIcon />
      </button>
    {/if}
  </h1>
  <p class="bio">{$_.blurb.paragraph.replace('%s', age.toString())}</p>
  <Buttons>
    <Button href={instagramUrl} target=_blank>
      <InstagramIcon/>
      Instagram
    </Button>
    {#each socials as social}
      <ButtonIcon href={social.href} rel="me">
        <svelte:component this={social.icon} />
      </ButtonIcon>
    {/each}
  </Buttons>
</div>

<style lang="sass">
  @import '../../../assets/sass/vars.sass'

  .name
    position: relative
    width: fit-content
    font-size: 2.75rem
    font-weight: 700
    margin-bottom: 1rem

    .audio
      position: absolute
      top: -.5rem
      right: -1.75rem
      display: flex
      justify-content: center
      align-items: center
      width: 1.5rem
      height: 1.5rem
      padding: 0
      color: var(--primary-light)
      background-color: rgba(var(--primary-rgb), .3)
      border: none
      border-radius: 50%
      cursor: pointer

  .bio
    max-width: 31rem
    margin-bottom: 4rem
    font-family: var(--font-secondary)
    font-size: 1.25rem
    line-height: 1.25
    color: $whiteish
    text-align: justify
    transition: color .4s ease

  :global([data-theme="light"])
    .bio
      color: $blackish

  @media screen and (max-width: 768px)
    .name
      font-size: 2rem

      .audio
        right: -1.5rem
        width: 1.25rem
        height: 1.25rem

        :global(svg)
          height: .9rem
          width: .9rem

    .bio
      margin-bottom: 3rem

    :global([data-dyslexia-mode="true"])
      .name
        font-size: 2rem

  :global([data-dyslexia-mode="true"])
    .name
      font-size: 2.5rem

    .bio
      max-width: 30rem
      line-height: 1.5
</style>
