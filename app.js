var app = new Vue ({
	el: '#app',
	data: {
		show: [],
		message: 'Hello vue',
		sobrenos: `<p class="subtitle-container">Sobre nós</p>
<div class="text-container">
	O Grupo de Experiências Críticas em Infraestruturas Digitais é um grupo ativista de pesquisadores de diferentes áreas de conhecimento localizado no Centro de Inovação da Universidade de São Paulo. Nosso trabalho envolve um conjunto de experiências que tem o objetivo de pensar e problematizar as infraestruturas contemporâneas a partir de uma lógica diversa da aplicada em centros de tecnologia do Norte Global.<br /><br />Estamos interessados em estimular estudos que pensem a tecnologia não de uma forma abstrata, mas inserida em contextos determinados, com implicações sociais. Por isso, os projetos são pensados a partir do contexto em que inserem: Sul Global, América Latina e Brasil. Os resultados e formulações resultantes dos projetos buscam engajar ao mesmo tempo o mundo acadêmico (através de artigos, jornais acadêmicos, etc), mas também um público geral (através de projetos artisticos, midia em geral, etc).
</div>`,
		frentes:`<p class="subtitle-container">Frentes de pesquisa em andamento</p>
<div class="text-container">
	<h3>1. Exch w/ Turkers</h3>
	<p>Website com trocas entre turkers na tentativa de vislumbrar novas e mais justas realidades de treinamento de máquinas.</p>
	<h3>2. Turkers Brasil</h3>
	<p>Artigo acadêmico sobre os turkers brasileiros.</p>
	<h3>3. Apostila ativista</h3>
	<p>Material educativo para jovens que almejam uma formação em aprendizado de máquina mais ativista do que a proposta por cursos on line como o do Coursera. </p>
	<h3>4. Tradução sequencial: Google Translate</h3>
	<p>Artigo acadêmico a partir de resultados inusitados obtidos por experiências com tradução sequencial via Google Translate.</p>
	<h3>5. Visão Computacional - Van Abbemuseum <a href="https://mediarxiv.org/nv9z2/" class="frente-button" target="_blank">Preprint</a></h3>
	<p>Aproximações experimentais com os diversos sistemas de inteligências artificiais comerciais e seus bancos de imagens, como também seus processos de rotulagem.</p>
</div>`,
		pessoas:`<p class="subtitle-container">Rede de colaboradores</p>
<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="persona-row">
	<div class="persona-column">
		<ul style="list-style-type:none;">
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="https://brunomoreschi.com" target="_blank">Bruno Moreschi</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="https://www.gabrielpereira.net/" target="_blank">Gabriel Pereira</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" target="_blank">Barbara Clemente</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/lucas_nunes.png">
				<a class = "persona-name" href="https://github.com/lucasns97" target="_blank">Lucas Nunes Sequeira</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="https://gitlab.com/rafaelspeth" target="_blank">Rafael Tsuha</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="https://berinfontes.com/" target="_blank">Bernardo Fontes</a>
			</li>
		</ul>
	</div>
	<div class="persona-column">
		<ul style="list-style-type:none;">
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="https://guilhermefalcao.com/" target="_blank">Guilherme Falcão</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" target="_blank">Didiana Prata de Lima</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="http://sites.poli.usp.br/p/fabio.cozman/" target="_blank">Fabio Cozman</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="http://www.desvirtual.com/" target="_blank">Giselle Beiguelman</a>
			</li>
			<li class="persona-container">
				<img class = "persona-img" src="src/images/personas/default.png">
				<a class = "persona-name" href="http://www.centerartsdesign.org/" target="_blank">Center for Arts Design Social Research - CADSR</a>
			</li>
		</ul>
	</div>
</div>`

	},
	methods: {
		changeText: function(tab) {
			this.show.pop()
			if (tab == "s")
				this.show.push(this.sobrenos)
			else if (tab == "f")
				this.show.push(this.frentes)
			else if (tab == "p")
				this.show.push(this.pessoas)
		}
	}
})
app.changeText('s')
