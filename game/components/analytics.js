/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/


/*
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P3W0Q1HS7T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P3W0Q1HS7T');
*/

// Usage tracking - remember to replace with your own!
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-P3W0Q1HS7T');
}
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P3W0Q1HS7T';
head.appendChild(script);