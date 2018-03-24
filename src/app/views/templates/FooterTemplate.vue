<template>
    <div class="footer">
        <div class="footer__social-media">
			<div class="footer__social-media__social">
				<img src="~_img/facebook.svg" alt="Facebook">
			</div>
			<div class="footer__social-media__social">
				<img src="~_img/twitter.svg" alt="Twitter">
			</div>
			<div class="footer__social-media__social">
				<img src="~_img/instagram.svg" alt="Instagram">
			</div>
		</div>
		<div class="footer__copyright">
			<p>© 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.footer {
		width: 100%;
		margin: 0 auto;

		margin-top: 30px;

		padding: 30px 0;

		box-shadow: 0 2px 20px 0 rgba(0,0,0,0.13);

		&__social-media {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
	
			max-width: 147px;
			margin: 0 auto;

			&__social {
				width: 34px;
				height: 34px;
			}
		}

		&__copyright {
			
			margin-top: 30px;
			text-align: center;
			font-size: .75rem;
			color: #B5B5B5;
			letter-spacing: 0;
		}
	}
</style>
