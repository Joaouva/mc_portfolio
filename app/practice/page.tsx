import OptimizedImage from "@/components/OptimizedImage";

export default function PracticePage() {
	return (
		<div className="min-h-screen">
			<div className="max-w-4xl mx-auto px-6 pt-52 pb-20">
				<div className="space-y-8">
					{/* Profile Image */}
					<div className="mb-12 flex justify-center md:justify-start">
						<div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full">
							<OptimizedImage
								src="/images/profile.png"
								alt="Manuel Cruchinho"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 256px, 320px"
							/>
						</div>
					</div>

					<h1 className="text-4xl font-light tracking-wider uppercase mb-12">
						About
					</h1>

					<div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
						<p>
							Arquiteto apaixonado por desenho e viagens. Vejo as viagens como
							fontes de inspiração, expandindo os meus horizontes criativos.
						</p>

						<p>
							Em 2014 terminei o mestrado em arquitetura no Instituto Superior
							Técnico, onde adquiri os primeiros conhecimentos técnicos.
						</p>

						<p>
							Trabalhei cerca de oito anos no atelier SalaSul, onde liderei
							diversos projetos de reabilitação de edifícios e construções
							novas.
						</p>

						<p>
							Em 2022 decidi embarcar numa nova aventura e abri o meu próprio
							atelier MCA - Manuel Cruchinho Arquitectos.
						</p>

						<p>
							Acredito que cada projeto arquitetónico deve refletir a identidade
							e necessidades únicas de cada pessoa.
						</p>

						<p>
							A minha visão é tornar-me uma referência no mercado, alguém em
							quem as pessoas confiem e que vejam como guia para concretizar os
							seus projetos arquitetónicos com excelência.
						</p>

						<p>
							Atualmente tenho um interesse crescente no desenvolvimento de
							projetos na área da sustentabilidade por ser crucial para
							construir um futuro mais equilibrado e responsável.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
