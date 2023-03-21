<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1894.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// set up the canvas</p>
<p class="p1">const canvas = document.getElementById('canvas');</p>
<p class="p1">const ctx = canvas.getContext('2d');</p>
<p class="p2"><br></p>
<p class="p1">// set up the ball</p>
<p class="p1">let ballX = canvas.width / 2;</p>
<p class="p1">let ballY = canvas.height / 2;</p>
<p class="p1">const ballRadius = 10;</p>
<p class="p1">let ballSpeedX = 5;</p>
<p class="p1">let ballSpeedY = 5;</p>
<p class="p2"><br></p>
<p class="p1">// set up the paddles</p>
<p class="p1">const paddleHeight = 80;</p>
<p class="p1">const paddleWidth = 10;</p>
<p class="p1">let playerY = (canvas.height - paddleHeight) / 2;</p>
<p class="p1">let computerY = (canvas.height - paddleHeight) / 2;</p>
<p class="p2"><br></p>
<p class="p1">// set up the score</p>
<p class="p1">let playerScore = 0;</p>
<p class="p1">let computerScore = 0;</p>
<p class="p2"><br></p>
<p class="p1">// set up the key controls</p>
<p class="p1">document.addEventListener('keydown', (event) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (event.key === 'w') {</p>
<p class="p1"><span class="Apple-converted-space">    </span>playerY -= 10;</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else if (event.key === 's') {</p>
<p class="p1"><span class="Apple-converted-space">    </span>playerY += 10;</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else if (event.key === 'i') {</p>
<p class="p1"><span class="Apple-converted-space">    </span>computerY -= 10;</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else if (event.key === 'k') {</p>
<p class="p1"><span class="Apple-converted-space">    </span>computerY += 10;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// set up the game loop</p>
<p class="p1">function gameLoop() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>// clear the canvas</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.clearRect(0, 0, canvas.width, canvas.height);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// draw the ball</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.beginPath();</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillStyle = '#fff';</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fill();</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.closePath();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// move the ball</p>
<p class="p1"><span class="Apple-converted-space">  </span>ballX += ballSpeedX;</p>
<p class="p1"><span class="Apple-converted-space">  </span>ballY += ballSpeedY;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// check for collisions with the walls</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (ballY + ballRadius &gt; canvas.height || ballY - ballRadius &lt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>ballSpeedY = -ballSpeedY;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (ballX + ballRadius &gt; canvas.width) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>ballSpeedX = -ballSpeedX;</p>
<p class="p1"><span class="Apple-converted-space">    </span>computerScore++;</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else if (ballX - ballRadius &lt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>ballSpeedX = -ballSpeedX;</p>
<p class="p1"><span class="Apple-converted-space">    </span>playerScore++;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// check for collisions with the paddles</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (ballX - ballRadius &lt; paddleWidth &amp;&amp;</p>
<p class="p1"><span class="Apple-converted-space">      </span>ballY + ballRadius &gt; playerY &amp;&amp;</p>
<p class="p1"><span class="Apple-converted-space">      </span>ballY - ballRadius &lt; playerY + paddleHeight) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>ballSpeedX = -ballSpeedX;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (ballX + ballRadius &gt; canvas.width - paddleWidth &amp;&amp;</p>
<p class="p1"><span class="Apple-converted-space">      </span>ballY + ballRadius &gt; computerY &amp;&amp;</p>
<p class="p1"><span class="Apple-converted-space">      </span>ballY - ballRadius &lt; computerY + paddleHeight) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>ballSpeedX = -ballSpeedX;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// draw the paddles</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillRect(0, playerY, paddleWidth, paddleHeight);</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillRect(canvas.width - paddleWidth, computerY, paddleWidth, paddleHeight);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// draw the scores</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.font = '30px Arial';</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillStyle = '#fff';</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillText(`Player: ${playerScore}`, 20, 40);</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillText(`Computer: ${computerScore}`, canvas.width - 220, 40);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// request the next frame</p>
<p class="p1"><span class="Apple-converted-space">  </span>requestAnimationFrame(gameLoop);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">// start the game loop</p>
<p class="p1">gameLoop();</p>
</body>
</html>
