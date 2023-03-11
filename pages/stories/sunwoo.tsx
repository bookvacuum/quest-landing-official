import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from 'styles/stories.module.css'
import CorroboratorCard from '../../components/CorroboratorCard'
import cardStyles from "styles/CorroboratorCard.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
     

  return (
<>
      <Head>
        <title>Sunwoo's Story</title>
      </Head>
      
      <div className={styles.container}>

        <div className={styles.flexColumn}>
        <h1>
<strong>I raised 1 mil+ and left my startup 4 months later. Here’s what
happened. </strong>
</h1>
<h4> Story from former CEO of Cromatic Sunwoo Lee, corroborated by 3 additional verified sources</h4>
<p>
A few weeks ago, I left the startup where I was the CEO and cofounder. The
startup had raised a party round with big name investors just 4 months ago. I
still get inquiries from folks in the industry and investors who are excited
about the company, and it’s been a dilemma how forthcoming I can be about what
happened since the company is still going on. I’ve always wanted to tell the
full story of what happened, but I worry about the reaction from the two
co-founders who remain in the company and from investors who still support the
company. I decided to share the raw version of the story in this community with
the hope that this can help anyone dealing with a situation similar to mine.
Buckle up for a wild story.
</p>
<p>
(The story is long. If you want to read the TLDRs and scroll down to lessons
learned that is fine too. 
</p>
<h2>
<strong>Context </strong>
</h2>
<p>
<strong>TLDR: I was the only full time CEO/co-founder of a startup that is operating async, all remote, with even equity split. My two-part time co-founders made it seem like they’ll be joining soon but actually had no intention to. There were many complications with them being part-time. On top of this, I faced a lot of resistance making the shots, and one of the co-founders had serious temper issues that the third co-founder did nothing about because this unusual arrangement allowed the two of them to preserve their full time ambitions while running a venture-backed startup at my expense. </strong>
</p>
<p>
I was the only full time cofounder of a startup that was formed in late April. Almost immediately after formation, we went out to raise our pre-seed. The market was starting to affect pre-seed rounds as well, but during the next 2-3 months, we raised over 1mil at >= 10mil  valuation with some major institutional investors and angels. We had a relatively smooth experience fundraising pre-revenue, pre-product because we were riding off the wave of a new trend in the industry, I signed business agreements with two big publicly traded companies, we had several non-paying customers, and importantly, because the founding team had accolades, experiences, school degrees, and connections that were typically considered top notch in the startup/venture world. 
</p>
<p>
During the whole time, my two co-founders, I will ll call them Kelly and Kevin, had full time jobs. Kelly was still in the middle of their PhD working at labs (not just one but two for some time), and Kevin was a senior engineer at one of the most successful “startups” out there. Needless to mention, we were operating completely remotely and asynchronously other than 2 weekly team meetings. To top it all off, 1) the equity split was completely even among the founders 2) all three founders were on the board, and 3) the two part-time co-founders wanted to pay themselves a salary only 20K lower than mine.
</p>
<p>
In the beginning, I was okay with the arrangement because Kelly was initially spending the full time equivalent on this startup. Moreover, there was not much engineering work to be done at the beginning, and Kevin told us he is waiting for the cliff to hit later this year. I was happy to pay them a salary to make them feel appreciated and responsible for the work they are doing for the startup. 
</p>
<p>
Just like our investors, I believed in the team. My co-founders had stellar track records and there is no doubt that they have expertise in their respective domains. I believed that my co-founders were capable and ambitious, and that they would do what is best for the company, objectively. I also understood that it’s hard to abandon their celebrated full time roles for a startup that just started. I assumed, wrongly, that once fundraising was done and the company had stabilized, they would seriously consider joining full time.
</p>
<p>
On May 17, early on in the fundraise, I brought up to my cofounders my worries about them being part-time after talking to a friend/investor who expressed concern about the arrangement from both the perspectives of friend and investor. Kelly did not react well. She said bringing this up has irrevocable implications. Offended that a potential investor may have planted ideas in me that would make me question the arrangement, she ended the call abruptly. Taken aback by her lashing out, I ended up sending an apology to her to avoid co-founder conflict so early on. Kevin was more receptive to discussing the matter and even messaged me after the meeting that “it wasn’t fair to take it out on you.” But he also provided no timeline. In fact, he told us during the call that this is not the first time he’s worked multiple engineering jobs at the same time, and that working multiple jobs simultaneously actually makes him a better engineer. He said it’s nobody’s business if you work 2 or 5 jobs, as long as you do what needs to be done. This experience already instilled a fear in me that even a mention of commitment levels would lead to conflict.
</p>

<p>
There were a lot of wins during this time in terms of response from non-paying customers, investors, and our MVP. Out of fear that I’d be obstructing our progress if I pressure my cofounders about their commitment levels even further, I made the costly error of brushing this matter aside. I decided to focus on what I can control, growing the company to the best of my ability.
</p>
<p>
During the next 6 months of course, there were many complications associated with my co-founders still keeping their full time jobs. For example, I would feel that our product development was a bit too slow for an early stage startup despite having a diligent full time product designer. Even Kelly would get worried that Kevin’s calls on product/engineering were biased towards keeping his full time job. Is he insisting on a no code solution because it was genuinely a better, more efficient choice for the company, or because he simply didn’t have enough time to build?
</p>
<p>
Kelly and Kevin were most definitely not spending the full time equivalent on this startup as they’ve been telling me and investors. More importantly, it became clear that they prioritized their day time jobs more than the startup. 
</p>
<p>
I soon found out that Kelly and Kevin haven’t even reported their second gig (our startup) to their full-time employers. (Even though Kevin was required to by his employer, he didn’t, most likely because of his ambitions of getting promoted). They would not even list our company on their personal Linkedins, and avoided doing anything that could potentially cause their employers to find out about their second gig even if that could help the startup. Kelly was telling me and the investors that she’s “wrapping up” her PhD, and when I asked her why she cannot take a leave, she told me that her lab data would expire and render her research meaningless…
</p>
<p>
Even though we had a good amount of runway and decent traction, I started to worry how the hell I’m going to raise the next round with my co-founders who are still part-time. I was the only face and name publicly associated with the company, and as CEO, I would take full blame and responsibility if anything went wrong. 
</p>
<p>
Once the fundraising wrapped up, it also became apparent that Kelly and I had disagreements about the direction of the company while Kevin had close to zero opinions. And we couldn’t stop clashing. We’d look at the same metrics and arrive at different conclusions on how to proceed. Separation of roles was also not working either. I was the full time CEO but I couldn’t even ask Kelly how things were going without her barking that I’m micromanaging her. But she would casually just propose to scrap my entire domain or criticize my marketing, another domain of mine.
</p>
<p>
Most importantly, she just couldn’t let me make the business call. Since day 1 of forming a team, Kelly had been dead set on the problem we are solving and the solution (a marketplace). I did not think that that was the right/best solution to pursue based on the learnings I gathered while running the company full time. Nobody could be 100% sure what was right, but in my view, I had spent the most time marketing, selling, talking and thinking about the company. Since I was undertaking the responsibility and commitment of a full time CEO, I believed that I was warranted to make the call on this matter at the very least. 
</p>
<p>
I tried to convince the team including Kelly by gathering the materials that led me to my conviction: coded needfinding interviews, email correspondences during sales, a list of lost deals and their reasons, and even insights from our investors that I agreed with (this was in the hopes that she’d value their opinions if she didn’t value mine). During team meetings, I became more vocal about my views on how to proceed. Kelly would become increasingly aggressive as she felt that I’m questioning her day 1 conviction. On October 10, soon after I put my foot down on determining what’s next for the company and had separate conversations with Kevin and our employee checking in about the company direction, she exploded at me. (The specific trigger was that I only liked a tweet mentioning our company even though she thought it needed to be retweeted.) These are her exact words posted on the founder chat minutes apart that day.  
</p>
<p>
“I don’t want to deal with your new directions every other week but we are a marketplace do you want to make money or not” 
</p>
<p>
“Fuck this shit, stop listening to investors”
</p>
<p>
“Can you please fire me? Working with you is so miserable It really is” 
</p>
<p>
“I WANT OUT” 
</p>
<p>
She added that she would not come to the meetings that day and instead will be deciding whether to remain in the company after discussions with investors. 
</p>
<p>
If this was a one off instance, I would have wanted to work it out. But her anger issues had been a pattern. 
</p>
<p>
Among countless instances, on June 11, not even 2 months into formation, in the middle of fundraising and providing investors with our captable, she called me and proposed cutting my equity. (That it’d look absurd if the single full time cofounder/CEO’s equity went below 33% as an afterthought…) This was apparently because I wasn’t organized enough for her when she’d call me in the evenings after her day job. She said Kevin would probably agree with re-discussing our equity split. 
</p>
<p>
When I texted Kevin what she proposed, his immediate response was, “that’s crazy” 
</p>
<p>
“Disengage for now…not sure what’s got into her. For the record I don’t see any reason to cut your equity. That’s a rash and nonsensical thing to suggest”
</p>
<p>
In another instance, she screamed at me during a call in the presence of our employee because she mistakenly thought I was trying to build some other product when all I was suggesting was that we could build an <em>integration</em> with that product. I had to teach her what integrations and APIs were to calm her down and explain myself. 
</p>
<p>
By this point in time, I had already started to develop serious anxiety due to how erratic and verbally aggressive Kelly was. I became fearful that I’d make any mistake and get verbally abused by Kelly. As abusers do, Kelly would exploit the fearful impact she’d have on me when she’d say or do something erratic and aggressive. Kevin always admitted that Kelly was “unprofessional” “uncool” and “needs to be more patient” privately, but did nothing about it other than telling me that it’s one of those things I cannot control or change about a person.
</p>

<p>
On September 27, I wrote to my co-founders about feeling burdened as a solo full time founder, which led to an altercation, and Kelly became extremely aggressive again, word vomiting in all caps. Kevin messaged me privately, “just stop talking, tomorrow we move on and pretend this never happened.” I ended up apologizing to Kelly that night, really out of fear. She never responded back or acknowledged my apology to this day. 
</p>
<p>
There is so much more I could share–stories on stories of unreasonable aggression. These were methods of silencing me from bringing up the elephant in the room–that this unusual arrangement I had initially agreed to was not good for me, not good for the company. The one thing I really want to say is that I tried (a little too much). I tried to work around my two part time co-founders–one passive, one aggressive–united by their desire to build a venture backed startup while sustaining their full time ambitions, which could only be possible at my expense.
</p>
<p>
In the meantime, I was experiencing cognitive dissonance: we made more progress on the product, we were generating revenue, and I was the biggest champion of my company and team, but I didn’t think this was sustainable for the company or for myself. 
</p>
<p>
After Kelly threatened to leave the company on October 10, I decided that that was the last straw. The next day, I told Kelly and Kevin that I will be leaving the company. 
</p>
<p>
I did consider kicking both of them out. I decided against it, however, because I felt that the early investors would always be on Kelly’s side. 
</p>
<h2>
<strong>After decision to leave</strong>
</h2>
<p>
It gets worse. 
</p>
<p>
<strong>TLDR: They reject my proposal for a smoother transition, I leave the company with basically nothing, they lie to others that I’m leaving the company to go to grad school, they threaten me saying they won’t pay my final paycheck, they violate the law–and actually not pay my final paycheck–and they tell me to “go fuck yourself” when I ask for my final paycheck. I am paid finally after consulting 3 attorneys and sharing with two investors.  </strong>
</p>
<p>
My co-founders told me that they’ll keep going on with the company. (They still think they can make it work as part-time co-founders.) The company did feel like my baby, and I wanted to wrap up amicably. 
</p>
<p>
On October 11, I wrote to my co-founders that since the departure of the only full time co-founder/CEO is pretty damaging for an early stage startup, I propose that we do a gradual transition with the following conditions. 1) “I will leave basically anytime you want me as CEO, granted we have enough time for at least the account handover” 2) I will take a substantial role as an advisor of the company with 4% equity (equivalent to waiving cliff) and no monetary compensation 3) I will support the company on the sidelines however much they’d like me to be involved with 4) I recommend we only announce the transition in leadership after we find another full time CEO and 5) we sign a standard exit agreement with all the usual non-competition clause so on and so forth.
</p>
<p>
Kelly thought most of these terms were actually extremely reasonable. 
</p>
<p>
But Kevin wrote back, “whoever wants to leave can leave, but no accelerated vesting since your departure is voluntary on your part.” 
</p>
<p>
Even when Kelly said she may leave, Kevin said he was against giving her any equity or compensation as an exit package. It was an ideological matter for him. (I suspect it’s because he was an early employee at a stingy startup where an employee could never dream of receiving an exit package for voluntary departure.) 
</p>
<p>
Kevin was right that the one year cliff did not hit yet and that for employees, quitting usually leaves you with nothing. But logically, what was best for the company was that the ex-CEO/co-founder still had stakes in the company. If I were an advisor with stakes in the company, I wouldn’t be awkwardly writing back to investors still reaching out to me about the startup like this: “Hi Nick! Thanks for reaching out. I actually left [company name] 2 weeks ago due to my co-founders still being part-time (I was the only full time cofounder). The company is still going on from what I know.” 
</p>
<p>
I told them I’m happy to compromise for 1%. Kevin asks, “help me understand - how does giving you 1% help the company?” He said he couldn’t help but take it personally if I am coming from this kind of “entitlement.” 
</p>
<p>
I tried to convince him but to no avail. 
</p>
<p>
Kevin told me that, “from where I’m coming from, if anything you owe this company by fulfilling your final duty and asking nothing more in return…I want to be very very clear about this - I do not want you to leave, and never have. From what I can tell, nobody in this company wanted you to leave…As such, your departure has created sadness and frustration” 
</p>
<p>
Kelly added, “the company has done a lot for your career. You got a lot more out of it than salary already” 
</p>
<p>
Ultimately, I took the most they could give–0.1 nominal stake–and we agreed on Oct 21 to be my last day as CEO. I had no reason to take on a substantial advisor role or do a slow transition. 
</p>
<p>
A number of things happen next.
</p>

<p>
First, a mutual acquaintance texted me congratulating me for getting into grad school. 
</p>
<p>
“Kelly said you were leaving [startup] for grad school?” 
</p>
<p>
That was not the reason. Obviously. 
</p>
<p>
(When I confronted Kelly about this, Kelly responded, “I told them that you might go to grad school and is pursuing other passion, which is<em> less of a lie</em>”)
</p>
<p>
I feared that Kelly was spreading lies so I decided to accelerate the announcement to our investors. Against Kelly’s wishes that I write that I’m leaving “since my professional goals and interests have changed since joining the company,” I sent an email to investors plainly stating that I am leaving due to “differences in commitment and differences in direction.” I thanked them for their support, talked about the progress we made so far, and let them know the company is going on and that the remaining co-founders will be following up about a new CEO.
</p>
<p>
Luckily, all of those who responded were understanding and diplomatic. 
</p>
<p>
I cooperated with the ip handover. But on the very last day at the company, I didn’t feel like giving away my password for my work email because I did not feel comfortable knowing that Kelly’s been lying. I told the team that I transferred google workspace ownership so they can simply deactivate and redirect my account as any employer does. 
</p>
<p>
Instantly, Kevin calls me and tries to convince me to make his life easier by giving him my password. Until this point, superficially at least, Kevin and I had been on relatively good terms. He demands that I give him this shortcut, or else he’ll have to go explain this to Kelly, and he’ll be pushed to withhold my final paycheck. I asked, “Are you telling me you are afraid of Kelly?” He explodes and screams on the call about how he has no time for this and how incompetent I am for not being able to do this simple thing. I’ve never heard him lose it like this. I tell him bluntly, “This is not okay. I’ve never been unprofessional with you, ever.”  
</p>
<p>
After the call, I write, “What you threatened me with on the call is strictly illegal and I will be taking legal action if my final paycheck is withheld for any unjust reason.” 
</p>
<p>
Kevin responds, “Yeah sue me”
</p>
<p>
Technically, by California law, since I gave them early notice, I should have been paid all my wages that day, at the time of my quitting. The company also owed me reimbursement for a trip I made for work. 
</p>
<p>
I got nothing that day, which was already a violation of the law. Instead, they sent me an exit agreement to my personal email.
</p>
<p>
The exit agreement said that for 4K, I release all my claims to sue, agree that the company owes me nothing else, agree to the non-compete clause, etc. 
</p>
<p>
It simply did not make sense for me to sign this because it didn’t even make it clear that this 4K was inclusive of my final paycheck. 
</p>
<p>
The next day and the next next day came. Still no final paycheck.  
</p>



<p>
I was in shock that my co-founders were not shying away from making it obvious that all of this was intentional and not just a mistake or delay. (intentionally withholding final paycheck could lead to double penalty in California). 
</p>
<p>
I consulted 3 attorneys during the next few days who all said the same thing, basically that I have no reason to sign anything, this is illegal, and I should demand for my final paycheck first. One attorney very clearly corrected me when I said this was “unacceptable.” She legit said, “bruh, not just unacceptable, it’s <em>illegal</em>” 
</p>
<p>
On October 25, I sent an email to Kelly and Kevin through my personal email. Here’s the entire correspondence, word for word. 
</p>
<p>
Me: “I am informing you that I have not received my final paycheck as well as reimbursement for transportation to a company event. I have already notified you of these payments on October 21. I am legally entitled to these payments now, and demand that you pay all that is legally owed to me. I will use legal avenues as necessary to make sure I receive these payments. ” 
</p>
<p>
Kevin responds from his work email,
</p>
<p>
“Dismissal payroll was ran on your last day. Between now and then, only 1 business day has passed. Bank transfer takes 2-3 business days. Nothing we can do to speed that up so please stop wasting my time with these emails” 
</p>
<p>
I ask, “in Gusto's website on dismissal payrolls, it says ‘Your employee will see this paystub in their Gusto account one day after their dismissal date.’ I do not see the paystub in my Gusto account. Can you check why this is?”  
</p>
<p>
Kevin tells me to then go fuck myself: 
</p>
<p>
“So rarely do I have cause to say this but you truly are a petty, entitled, disgusting human being. Go fuck yourself.”
</p>
<p>
That was my last interaction with Kelly and Kevin ever. 
</p>
<p>
My roommate asked their tech company’s HR director about my problem, and people I didn’t know got mad on my behalf. They suggested I report this immediately to the Department of Labor and that this is just not supposed to happen with Gusto. 
</p>
<p>
Two investors asked me whether everything was wrapped up and resolved.
</p>
<p>
I told them it’s been difficult since the remaining co-founders were violating the law by not paying my final paycheck. 
</p>
<p>
They finally paid me on October 26, five days after my final day. They blamed it on Gusto. Some problem with Gusto apparently. An investor had to relay that to me. 
</p>
<p>
Kelly and Kevin are lucky. If it weren’t for the few investors who I happened to like, they’d be dealing with a small claims suit right now for the lamest reason. 
</p>

<h2>
<strong>Conclusion and lessons learned</strong>
</h2>
<p>
<strong>Update: </strong>
</p>
<p>
<strong>Kelly pushed out Kevin, but struck a deal with him to keep him still involved. In his place, she appointed her ex-girlfriend as CTO, the same girl she would have relationship problems with and ask me for advice on. And they are fighting already duh. Kelly laid off all of the founding members before their 1 year cliff. Kelly is blaming me for everything apparently. </strong>
</p>
<p>
<strong>The first hands on investors ghosted me. Kelly is trying to raise a seed round and calling unrealistic numbers about their traction. </strong>
</p>
<p>
Emotionally, it’s been very difficult–deciding to quit and dealing with the aftermath–but it was probably the best decision I made all year.
</p>
<p>
I still have a lot of anxiety about feeling like a failure and my reputation in the venture world. 
</p>
<p>
But I am in a better state now thankfully. I am taking some time off. And I got an exciting opportunity lined up from people who’ve seen it all and still believe in me. 
</p>
<p>
I share this story because one of the biggest things that helped me quit was talking to another co-founder/CEO of a seed stage company who had a very similar experience. They are now a second time founder of a rapidly growing startup.
</p>
<p>
These stories happen more than you think but you don’t hear as many of them because usually the existing co-founders pay off the leaving co-founder and make them sign an exit agreement. 
</p>
<p>
Luckily for me, they never made the option worthwhile. 
</p>
<p>
There is no denying that I made a lot of mistakes as a first time founder, including the fact that I should not have agreed to this arrangement from the very beginning. 
</p>


<h3>
Here are some lessons I learned: 
</h3>
<ol>
<li><strong>If you have funding and you still can’t take a leap of faith, sorry, startup’s not for you. And if you think you are so exceptional you can be an exception to this rule, something is probably wrong with the way you think about starting up. </strong>Being full time is not just important because that allows you to move more quickly and get more stuff done. It’s also important because..
</li>
<ul>
<li>You can be mentally healthy even with the usual startup grind. You won’t be getting angry at coworkers from either workplaces, saying, “I don’t have time for this” as if that’s supposed to show how important and busy you are.
<p>The times when my co-founders threw fits and made irrational decisions really did coincide with increased stress from their other day time jobs.
</p>
</li>

<li>There won’t be a conflict of interest as you may prioritize your full time ambitions. Scheduling your seed round based on your plans to graduate, not applying to an accelerator because your day time job employer may find out. Don’t do this. In an early stage startup, you can never make decisions with full information and complete certainty. So what do you do? You must still try. In iterations. That’s how you’ll collect some of the best information–by trying the simplest, smallest thing and observing the results. Sometimes the best thing to do is  to try quickly and fail quickly. Thinking that your time is so limited and precious already creates more resistance to trying.
</li> 

<li>You will have more time to think and talk about your company, maybe even outside the workplace. And this can make all the difference. Simply telling folks about your startup is marketing, it’s good practice, it can bring unexpected sales deals, and it can help with product development. Kevin’s never met people who have this problem we are solving. Kevin probably doesn’t even talk about our company when he goes out to a random bar. So he has no opinions about the product and is only qualified to make decisions about the specific implementation. 
</li>

<li>Being a cofounder goes beyond getting some set of tasks done. An early stage CTO needs to study the problem and contribute to the vision, especially in regards to the product. Otherwise you are just a glorified VP of engineering. This applies to any co-founder more broadly. 
</li>
</ul>


<li><strong>Even if a team is formed to do something predetermined and specific, being able to run experiments, fail quickly, and pivot is crucial. How many companies have been built without ever pivoting? </strong>This point deserves a second shoutout. It’s often said that you shouldn’t be married to a product and that what you end up building is almost always different from your pre-seed pitch. 
<p>

    There is a lesson here for teams as well. 
</p>
<p>

    Our team was formed to solve a specific problem that Kelly’s previous company experienced at one point. Because there was too much confidence that we already represent the user persona, there was no question about whether there is another problem or even solution we will pursue. We didn’t go through a thorough UX design process from an unassuming state because we were moving too quickly. 
</p>
<p>

    I think the exploration stage and validation stage are still very different. Any venture I’m building next, I will be going through a thorough UX design process that does not start with looking for validation for something the team’s already decided. 
</p>
 </li>

<li><strong>Move quickly but take your time to raise (if possible) </strong>
<p>

    Related to the above. When fundraising, having conviction and confidence is a must. But that can also make you more inflexible. 
</p>
<p>

    Capital can lock you into a certain product/problem/vision. If you have the financial privilege, better to explore thoroughly without the pressure of capital first. 
</p>
<p>

    Remember that how much you raise is false/indirect validation! A lot of hyped companies will be dying slow deaths in today’s market condition. Of course, fundraising successfully can help you de-risk by giving you a solid runway where you can try many things until PMF. But ultimately, if you want to build a company without getting stressed by the dissonance between the hype and the actual substance of the company (which I know a lot of founders struggle with), you need to see fundraising for what it’s worth–false validation. 
</p>
</li>
<li><strong>Try the worst case scenario exercise for cofounders </strong>
<p>
Clearly I’ve heard countless times that a cofounder relationship is like a marriage, did cofounder trials and still let this happen to myself. How could it have been avoided? 
</p>
<p>
One exercise I wish I had done earlier is envisioning the worst case scenario a startup can go through, from internal or external reasons. Everything is rosie in the beginning, but what about during the toughest times? Would they scream at you? Would they lie? Would they make completely emotion driven decisions? What would your co-founder relationships look like in those cases? 
</p>
</li>

<li><strong>Vet out previous experiences properly. Check on as many people who worked with your co-founder before (not just some friends).  </strong>

<p>
On one of my last days in the company, I was at a company event when a cofounder’s labmate I had seen one other time before came up to me and another investor. They introduced themselves as “Kelly’s punch bag.” True story. 
</p>
<p>
That is the exact word I’d use to describe my experience working with Kelly. And clearly other people have felt it too. 
</p>
<p>
It also turns out that Kelly has been seriously exaggerating their previous experiences, calling herself a second time founder when that’s far from the truth. The venture world rewards those who bluff their way. Take shiny accolades and titles with a grain of salt. And if someone uses those as a crutch all the time, that is actually a sign of weakness.   
</p>
</li>

<li><strong>If you notice problems, address them among the founders. If you are developing a fear of addressing issues due to how aggressive someone is, that’s already a bad sign. </strong>
<p>

        In September, when I wrote to my co-founders about feeling underappreciated and unsupported as the only full-time founder, Kevin told me that if you start questioning what is fair, then that is just automatically the “start of the end.”
</p>
<p>

        I disagree. Those conversations need to be had fully if the need arises even after the initial equity split. If my cofounder really did listen to why the current structure of the company was unhealthy, there could have been a different outcome. 
</p>
</li>

<li><strong>Watch out for your wellbeing and listen to friends who do so around you. </strong>
<p>

        There must be a healthy balance between what’s good for the company and what’s good for you. Hopefully, those two things are completely aligned, but sometimes you start sacrificing one over the other to the extreme.
</p>
<p>

        I’ve had friends who questioned the equity split and arrangement. I should have listened to them more carefully earlier on. 
</p>
<p>

        My housemates who overheard my meetings with Kelly helped me accept the toxicity of this whole situation that I’ve been denying for the sake of success, the company, the investors, my career, so on and so forth. I would have quit much later if it weren’t for them. 
</p>
</li>

<li><strong>Don’t underestimate the importance of basic lessons in tech entrepreneurship. Just because you are smart in some domain doesn’t mean you are well suited to build a company.  </strong>
<p>

        For example, take the lesson, ‘pivots and iterations are seminal to early stage startup building.’ Unfortunately, incentive structures in academia can discourage pivots and iterations. Don’t let hubris related to having an advanced degree and technical depth discourage you from taking basic startup lessons. Go watch a few YCs videos. Go watch videos on UX design processes. Go read <em>Zero to One</em>, <em>The Lean Startup</em>… There are a lot of resources out there but it’s easy to think you are too experienced for that.  
</p>

</li>
<li><strong>Work with good people. Don’t compromise on this! This includes co-founders, employees, investors, attorneys etc etc. </strong>
<p>

        Seriously. It’s worth it. Toxic people and environments breed other toxic people. 
</p>
<p>

        It will change your personality. 
</p>
<p>

        Close to quitting, I started to notice that I became much more risk-averse and fearful of making any mistake. I was obviously developing an unhealthy habit of apologizing whenever my cofounder would bring out the all caps. 
</p>
<p>

        That’s not the person I want to be. 
</p>
<p>

        Nothing is worth fucking up your personality over. 
</p>
</li>

<li><strong>Ego ruins everything.</strong>
<p>

        Plus, ego breeds ego. Is your company culture one where your coworkers make you feel defensive and you have to grow an ego to protect yourself? Or is it one that embraces learning and growth? Ask yourself these questions. 
</p>
</li>

</ol>
        </div>
        <div className={styles.flexColumn}>
        <CorroboratorCard style={cardStyles.rightContainer} userIcon={"/images/cat.jpeg"} verificationText={"Second Source at Cromatic"} timestamp={"10 minutes ago"} comment={"I was there when it happened."}/>
        <CorroboratorCard style={cardStyles.rightContainer} userIcon={"/images/cat.jpeg"} verificationText={"Roommate"} timestamp={"10 minutes ago"} comment={"I could hear someone yelling at Sunwoo when she was working, and on one occasion when we were coworking together, the cofounders were both late, camera off."}/>
        </div>
      </div>
    </>
  )
}
