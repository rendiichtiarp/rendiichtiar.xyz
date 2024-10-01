<script>
	import Artwork from './Artwork.svelte';
</script>

<section class="wrapper">
	<div class="grid-container">
		<div class="grid">
			<Artwork art="akrab-smpn-271jkt" tall />
			<Artwork art="foto-pkl1" />
			<Artwork art="foto-pkl2" tall />
			<Artwork art="foto-pkl3" />
			<Artwork art="foto-pkl4" tall />
			<Artwork art="foto-pkl5" tall />
			<Artwork art="lks-juara3" tall />
			<Artwork art="menang-quiziz" tall />
			<Artwork art="sertif-lks-wisuda" />
			<Artwork art="doodle" />
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../assets/scss/mixins.scss';

	.grid {
		gap: 0.8rem;
		grid-auto-rows: 230px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		width: min(100%, 72rem);

		@media screen and (max-width: 600px) {
			grid-auto-rows: 125px;
		}

		@media screen and (max-width: 868px) {
			width: min(100%, 75rem);
			gap: 0.2rem;
			grid-template-columns: 1fr 1fr 1fr;
		}

		&:before {
			@include outlineText($content: '&&', $translateX: -40%, $translateY: -160%);

			@media screen and (max-width: 868px) {
				@include outlineText($content: '&&', $translateX: -25%, $translateY: -95%);
			}
		}
	}

	.grid-container {
		display: flex;
		justify-content: center;
		margin-bottom: 4rem;
	}
</style>
