import { EPub } from '@lesjoursfr/html-to-epub'

const option = {
	title: 'zhangluo html2epub',
	author: 'zhangluo',
	publisher: 'zhangluo',
	version: 3,
	lang: 'en',
	css: `body { font-family: sans-serif; line-height: 1.6; margin: 2em; max-width: 800px; margin-left: auto; margin-right: auto; }
    h1 { text-align: center; margin-bottom: 1.5em; font-size: 1.8em; }
    p { text-indent: 1.5em; margin-bottom: 1em; text-align: justify; }
    p:first-of-type { text-indent: 0; }`,
	appendChapterTitles: true,
	content: [
		{
			title: 'The fall of Greta Thunberg and the silenced climate movement',
			data: `
            <h1>The fall of Greta Thunberg and the silenced climate movement</h1>
            <p>Five years ago, Swedish activist Greta Thunberg was the fierce face of a burgeoning climate movement, thrust into the international spotlight after condemning United Nations officials for their complicit inaction. She inspired millions to participate in Fridays for Future protests, addressed high-ranking political bodies and was Time magazine’s 2019 “Person of the Year.”</p>
            <p>In many ways, Thunberg was the perfect vehicle for institutional-sponsored activism — a media golden girl, whose resonance with digitally-inclined youth-sparked passion and hope for change.</p>
            <p>She was, that is, until she wasn’t.</p>
            <p>Thunberg became a taboo figure — and, at times, a target — on the public stage after voicing her solidarity with Palestinians at the onset of the war on Gaza in 2023. Her continued stance drew sharp backlash from a host of online users, Jewish advocacy organizations, mainstream media outlets and even the Israeli government, with critics condemning her perceived carelessness and, in the words of Forbes’ Daniel Markin, her “hatred of Israel.”</p>
            <p>Forbes emerged as a leading voice in an effort to tarnish Thunberg’s public image, exemplified in a virulent article by Jon McGowan, titled “Greta Thunberg’s Stand With Gaza Is A Problem For The Climate Change Movement.” Its sentiments toward the young activist were further echoed by a slew of other mainstream outlets, such as Newsweek and The New York Post.</p>
            <p>The media’s efforts to disparage Thunberg as a radical anti-Semite with a fading commitment to climate justice reflect a broader model of institutional bias. Thunberg’s media presence follows a familiar pattern: Activists are broadcasted and celebrated — until their advocacy becomes threatening. Once their message challenges entrenched power structures, they are swiftly abandoned. Her erasure is not just about her; it reveals the narrow limits of “acceptable” activism, which must never threaten the status quo.</p>
            <p>Her fusion of climate justice, human rights and antiwar activism is not a contradiction but an inevitable intersection, as she herself has stated. She is concerned with humanity, ecosystems and future generations — values fundamentally at odds with war and the relentless pursuit of profit.</p>
            <p>Thunberg’s stance further shed light on how the military plays a crucial role in today’s climate crisis, particularly that of the United States. While militaries worldwide contribute around 5.5% of total carbon dioxide emissions, the United States maintains at least 750 bases across more than 80 countries, amplifying its environmental impact.</p>
            <p>From 1978 to 2017, the U.S. military released nearly 3.7 billion metric tons of greenhouse gases into the atmosphere. In 2017 alone, the Pentagon emitted more toxic pollutants than some small developed countries and exceeded the total emissions of the U.S. iron and steel industries.</p>
            <p>We spend more on our military than the next 10 countries combined, with the Department of Defense’s 2025 budget surpassing $1.3 trillion. Given its vastly outsized military spending, it’s hardly surprising that the United States military claims the biggest slice of the world’s carbon-loaded pie.</p>
            <p>These are just a couple examples of how rampant U.S. militarization has a ruinous cost on our environments — the list goes on for much longer. Yet, discussions around climate justice rarely account for this reality, just as mainstream coverage of Thunberg’s activism often failed to. When she broadened her advocacy to include Israel’s destruction of Gaza, the backlash wasn’t just about her politics; it was about the boundaries placed on movements that dare to connect the dots.</p>
            <p>Gaza has become our most current example of war’s catastrophic impact on the environment. Israel’s blockade has crippled water infrastructure and shut down sewage treatment facilities, allowing raw sewage to spread across the land and seep into the Mediterranean Sea. Additionally, 80% of the trees in Gaza have been lost, while over two-thirds of Gaza’s farmland has been destroyed, including wells and greenhouses, due to bombardment.</p>
            <p>While the Israeli military operates separately, the United States plays a pivotal role in enabling its war efforts, funneling billions into weapons, intelligence and military technology that make such prolonged devastation possible.</p>
            <p>This cycle of war and climate devastation is both corrosive and seemingly inescapable. War — especially when waged or backed by the United States — is almost always framed as “necessary” for national security and, at times, global stability. But in these often violent pursuits of political stability, how much are related institutions enabling the military-industrial complex making our world profoundly unsustainable?</p>
            <p>Activists such as Thunberg are torn down and vilified by powerful mainstream media and political elites for daring to call attention to these very dynamics, making this already precarious situation all-the-more dire.</p>
            <p>I despise how, as a result of this skewed discourse, much of the climate movement today concentrates on the actions of the individual. Do I recycle as much as I should? Does this place have paper straws? Do you like my Prius?</p>
            <p>It’s high time we shift accountability away from individuals and place it where it truly belongs: on the institutions driving this destruction. We can’t rely on politicians or mainstream media to drive this conversation effectively, as they are the very ones that benefit from the status quo of ignorance and profit.</p>
            <p>UC Berkeley, for instance, proudly boasts its “leading” role in climate solutions, positioning itself as a champion of sustainability. Yet this same institution — along with the broader UC system — maintains deep financial ties to industries that fuel our global climate instability. As of last year, the UC system had around $3.3 billion invested in U.S. weapons manufacturers, a stark contradiction to its public-facing commitments and overarching progressive identity.</p>
            <p>But whether it’s the U.S. military itself or the very universities that claim to shape a better future, the powerful institutions presiding over and around us refuse to divest from war and profit-driven destruction. This means that it is once again up to us to challenge the status quo — no matter how “radical” that may seem.</p>
            <p>Call me controversial, but I find there to be nothing radical in advocating for a warless world that cherishes our ecosystems and prioritizes human rights. If our “progressive” society isn’t willing to grasp that, then we have a bigger problem on our hands.</p>
            <p>At the end of the day, nobody can truly call themselves a “climate justice hero” if they remain unaware — or willfully ignorant — of how the very institutions we operate within and benefit from play an architectural role in climate change.</p>
          `
		}
	],
	verbose: true
}

const output = '<--OUTPUT_PATH-->'

const epub = new EPub(option, output)
epub.render()
	.then(() => {
		console.log('Ebook Generated Successfully!')
	})
	.catch(err => {
		console.error('Failed to generate Ebook because of ', err)
	})
