var app = new Vue ({
	el: '#app',
	data: {
		show: [],
		message: 'Hello vue',
		sobrenos: `<h1>Sobre nós</h1><div class="text-container">O Grupo de Experiências Críticas em Infraestruturas Digitais é um grupo ativista de pesquisadores de diferentes áreas de conhecimento localizado no Centro de Inovação da Universidade de São Paulo. Nosso trabalho envolve um conjunto de experiências que tem o objetivo de pensar e problematizar as infraestruturas contemporâneas a partir de uma lógica diversa da aplicada em centros de tecnologia do Norte Global.<br /><br />Estamos interessados em estimular estudos que pensem a tecnologia não de uma forma abstrata, mas inserida em contextos determinados, com implicações sociais. Por isso, os projetos são pensados a partir do contexto em que inserem: Sul Global, América Latina e Brasil. Os resultados e formulações resultantes dos projetos buscam engajar ao mesmo tempo o mundo acadêmico (através de artigos, jornais acadêmicos, etc), mas também um público geral (através de projetos artisticos, midia em geral, etc).</div>`,
		frentes:`<h1>Frentes de pesquisa em andamento</h1><div class="text-container"><h3>1. Exch Turkers</h3>
<p>Website com trocas entre turkers na tentativa de vislumbrar novas e mais justas realidades de treinamento de máquinas.</p>
<h3>2. Turkers Brasil</h3>
<p>Artigo acadêmico sobre os turkers brasileiros.</p>
<h3>3. Apostila ativista</h3>
<p>Material educativo para jovens que almejam uma formação em machine learnings mais ativista do que a proposta por cursos on line como o do Coursera. </p>
<h3>4. Tradução sequencial: Google Translate</h3>
<p>Artigo acadêmico a partir de resultados inusitados obtidos por experiências com tradução sequencial via Google Translate.</p></div>
 `,
		pessoas:`<h1>Rede de colaboradores</h1>
<ul>
<li><a href="https://brunomoreschi.com">Bruno Moreschi</a> </li>
<li><a href="https://www.gabrielpereira.net/">Gabriel Pereira</a></li>
<li>Barbara Clemente</li>
<li><a href="https://github.com/lucasns97">Lucas Nunes</a></li>
<li><a href="https://gitlab.com/rafaelspeth">Rafael Tsuha</a></li>
<li><a href="https://berinfontes.com/">Bernardo Fontes</a></li>
<li><a href="https://guilhermefalcao.com/">Guilherme Falcão</a></li>
<li>Didiana Prata de Lima</li>
<li><a href="http://sites.poli.usp.br/p/fabio.cozman/">Fabio Cozman</a></li>

<li><a href="http://www.desvirtual.com/">Giselle Beiguelman</a></li>
<li><a href="http://www.centerartsdesign.org/">Center for Arts Design Social Research - CADSR</a></li>
</ul>`

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
