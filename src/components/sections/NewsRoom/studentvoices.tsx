"use client"

import { useState } from "react"
import { MessageCircle, User, Calendar, BookOpen, Globe, Heart, Lightbulb, Star, X } from "lucide-react"

interface Story {
  title: string
  author: string
  grade: string
  date: string
  excerpt: string
  fullContent: string
  storyTheme: keyof typeof themeData
  color: string
}

const themeData = {
  opportunity: { icon: Star, label: "Opportunity" },
  reflection: { icon: Heart, label: "Reflection" },
  adaptation: { icon: Globe, label: "Adaptation" },
  learning: { icon: BookOpen, label: "Learning" },
  balance: { icon: Lightbulb, label: "Balance" },
  empathy: { icon: User, label: "Empathy" },
} as const

export default function StudentVoices() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  const stories: Story[] = [
    {
      title: "My Perspective of the Pandemic!",
      author: "Vishal Ramesh",
      grade: "Grade 6",
      date: "March 9, 2021",
      excerpt:
        "This lockdown was not a bomb of devastation as I earlier thought, but it was a fortress of opportunities unlocked.",
      fullContent: `On March 15, 2020, I came home, and my mom told me that the school was closed for the next 15 days because of COVID-19. I was devastated but consoled myself that school would restart after 15 days. History followed its course, and as we all know, the newly phrased 'lockdown' was extended by our Prime Minister, Mr. Narendra Modi. That's when I came to know that, after lockdown, the School holidays would resume.

I felt a bit bad since I had not said goodbye to my friends and teachers at school. I received some homework, but after that, I felt empty, since school was a major part of my life. At home, I learnt through online courses, I began helping around the house, and it soon became my routine. I called my friends and talked to them, which made that emptiness little better. Very soon, I jotted down a plan for myself. I enjoyed watching MasterChef at home, reading more books, experimenting, cooking, and much more.

This lockdown was not a bomb of devastation as I earlier thought, but it was a fortress of opportunities unlocked. I began to understand myself more. As I learnt increasingly, not only about myself, about others, and discovered more on what I liked. When I found out that SpaceX and NASA were launching astronauts to the ISS, I jumped in excitement. I sat in front of the TV and had everything set up and began to watch it live. After a while, the mission got scrubbed, because of weather reports. The next day when they tried again, Dragon (the spacecraft they were riding) successfully docked with the ISS. I felt so happy since I am a huge supporter of SpaceX and NASA.

In the month of May, I received an update from my school about my online classes, and my excitement multiplied. I was going to meet my friends and I was finally going to learn the way I liked to, with my classmates. The night before the online classes began, I had set everything set up, in my small makeshift 'workspace' and went to bed, but unable to sleep because of my said excitement. The next day I was woken up by my mother exceedingly early, I did my morning chores and sat in front of the device, ready for the online class. It turned out, that I was one and a half hours early! I read a book and again checked the clock and I was still about 30 minutes early.

I finally logged into the TEAMS platform and some of my friends were already there. I really enjoyed the classes and felt grateful to be a member of this great school. The Online classes are going really well, and I am using my brain to its full potential, every day. A new online event called 'Global Analytica' was introduced to my class, and, I thought it would be very formal and hard, but instead, it was really fun, and it improved my communication, research, and analysing skills. We discussed about New Education Policies and Covid situation from different perspectives.

Now, we are well into the first term, near the end of August. Our Term Exams are coming up, and everyone is studying hard. Even before the Pandemic, I loved to learn, and research on little projects, that connects up to something that can change the world. Because of the Pandemic, I've learned and nurtured many new skills. Even with all this, there was still something missing. And then, I realised what it was. Before the Pandemic, I would chat, talk and visit my friends, at school. But know, we don't get to talk to each other inbetween the class breaks, van times or much-awaited lunch breaks. Offcourse, there is online texting and video calling now, but I was used to being able to talk to my friends when they were in front of me, as it was easier to convey things. Then I told myself, if you want to keep your brain healthy, you have to adapt to this situation. And voilà! I've learnt a new skill: Adapting to new and hard situations.

So, for you, it might have been a not-so-wonderful experience, but for me, it was one my best, because I learnt a lot, tried new chores, I think we should always learn from every experience. Again, I say, this lockdown was not a bomb of devastation as I earlier thought, but a fortress of opportunities unlocked. Thank you, and I hope this changes your opinion on COVID-19.`,
      storyTheme: "opportunity",
      color: "from-[#F7ECDE] to-[#E9DAC1]",
    },
    {
      title: "COVID My Tutor",
      author: "M. Thanushri",
      grade: "Grade 7",
      date: "March 9, 2021",
      excerpt:
        "COVID 19 has given me enough time to ponder upon, to self reflect and think back deeply on many things especially valuing time and my family.",
      fullContent: `HELLO EVERYONE!!! Hope you are having a safe quarantine, just like me. With the globe in the grip of COVID 19 I find the present situation 'very unique'. Currently each one of us might be overwhelmed by the fear of COVID 19, but actually it teaches a lot of things which we might never learn in normal days. There are times when the human life turns upside down but, time has suddenly taught us what is really essential for a good life.

Personally I feel COVID 19 has given me enough time to ponder upon, to self reflect and think back deeply on many things especially valuing time and my family. It's amazing to see the whole world adapting to this new face of life, like schools conducting online classes and many more. Sometimes many negative thoughts keep popping out but, no other time is better than the present to learn new things and to analyse the past mistakes and to create the best versions of ourselves.

Firstly when the pandemic had started I had high hopes that, it will end in a week or so, but my hopes did not last for long soon I started feeling miserable for many things. When my Himalayan trip got cancelled I couldn't resist my anger as I was eagerly looking forward for it. I started to dislike COVID, then when I heard traumatic news about COVID 19 in social media and in news channels my heart started to fill with loads of fear and dread. I'm a sports geek mainly interested in outdoor activities like football and athletics but because of this pandemic I couldn't go to parks, grounds or fields [to play] which made the situation even more worse. To my horror even I couldn't go to my grandparents' home. But slowly I started understanding this pandemic and tried to adapt to this new situation, and be happy with whatever that is possible right now like having online hangouts meet or a video call with my cousins and grandparents and of course with my close friends.

When I started adapting and changing myself, I learnt many things, I learnt to type faster since, most of my work is in the computer and I even started to enjoy the new version of paint [3D paint] and many posters. Slowly I learnt how to change password and even how to use task manger to fix my hanged computer. I even got a new interest towards baking and cooking. I liked my virtual online classes where I can interact with my aunties and class mates.

Later one day I realised that this pandemic made me to try out new challenges that come in front of me and has taught me 'n' number of things and prepared me to face any new circumstances that comes in future.`,
      storyTheme: "reflection",
      color: "from-[#9ED2C6] to-[#54BAB9]",
    },
    {
      title: "Life Skills Through Digital World",
      author: "K. Sudharshana",
      grade: "Grade 10",
      date: "February 26, 2021",
      excerpt:
        "Can life skills be incorporated now? My answer to this question is YES though the digital world restricts our physical activities.",
      fullContent: `The "new-normal" has brought its own sets of rules to be followed. One of them is adaptation. The digital world(the major part of the new normal) is playing a vital role in our daily lives today. Our schools are virtual, parents work is digital and what not?

When everything around us goes digital -there is a question that makes me ponder about?: Can life skills be incorporated now?

My answer to this question is YES though the digital world restricts our physical activities.

An event at school made me give this answer. Let me share my experience throughout and why I think that event helps us incorporate life skills.

GLOBAL ANALYTICA (the event name) is a session where every participant will be provided with a delegation and must solve a problem in the perspective of the delegation.

When I was provided with the role I had to represent and the topic we are supposed to discuss on, I was wondering on how to start with and move further. I told myself to gain knowledge of the topics, I realised I had to do a lot of research on the topic given, especially in the topic – National education policy (which I was clueless about earlier?). My next step was to get to know on the role I had to play in the forum (NEP 2020 – education officer, COVID-19 – Chef at a hotel) I had to think about the problem in the perspective of my role. While preparing for NEP, I realised I had to only support to the changes made and not repudiate (though I had some denials).

During the preparation for COVID-19, I was initially disappointed with my role. I thought what all I can say in the forum would be about my affected livelihood. Perhaps as I got know more and more my speech extended, extended and…extended (which I felt happy and relieved about ?) Surprisingly my talk in General Speakers List (GSL) turned out longer than I expected (I did go slow just to make it seem longer ?) I am usually reluctant when it comes to public speaking but managed to handle it. I had a mission to break the Ice and I did it!!

Now, coming to my answer for the first question. I underwent life skills such as critical thinking (During the analysis of the topic), problem solving (solving the problem), empathy(thinking in the perspective of my role) and it goes on and on. The most important point is the whole event was VIRTUAL!! These events and activities develop skills that are required in our daily life. That is why I think incorporating life skills through digital world is possible 🙂`,
      storyTheme: "adaptation",
      color: "from-[#E9DAC1] to-[#9ED2C6]",
    },
    {
      title: "Global Analytica 2020",
      author: "Shalini Ramesh",
      grade: "Grade 9",
      date: "February 15, 2021",
      excerpt: "Prepare to be wowed, every single time! I learnt that there is no end to learning!",
      fullContent: `Dear Reader, let us do some time travelling! Let me rewind the clock a little bit, back to the 10th of August, 2020, to be exact.

We (Graders 6 to 10), received word from the school that a special online event was to be conducted, called "Global Analytica". According to the mail, Global Analytica is an online focus-group discussion, planned like an e-simulation of an MUN (Model United Nations conference), focussing on certain core skills such as analysis, research, evaluation, communication, and collaboration, to address vital global and national issues.

Student leaders will have the opportunity to role-play as concerned stakeholders in 2 panel discussions, gather diverse aspects, viewpoints on certain issues, propose solutions, amendments, and design plans. Virtually!

We had a quick pre-conference, on how this event will be held, rules and regulations to help us prepare better for the actual sessions. The focus-group discussion topic for Day 1 was something completely new to me – The NEP 2020. I admit, I thought the NEP draft document is going to be long, full of words that Government authorities use, which I wouldn't understand. Surprisingly, it was in simple English, with many interesting solutions, suggestions, recommendations and proposals that can make schooling available for all and make schools a better place to be!

The goal of Day 1 (17th Aug) was to come up with changes we would want to make to the NEP draft. Burning the midnight oil, I read through the entirety of 60 pages of the NEP, learned about the hierarchy of the government, and how a policy administration is reaching the districts, cities, and villages. I went through news stories, press releases, videos, government sites, and I tried my best to leave no stone unturned! I was the representative of the Minister of School Education. This led to a lot of research and knowledge, on how the Ministry functions.

On the actual day, I was nervous, yet excited to share my ideas! The moderators – Grade 11 student leaders, were patient, kind and encouraging, making sure that everyone was comfortable to present their stance on the topic – 90 second speech. Followed by our individual presentations, we had debates. This was and still is, my favourite part of the entire Global Analytica! We each came up with possible debate topics – 'Should 3 languages be taught in schools? Should the regional language be the mode of communication in all schools? Should PRPs still be introduced?' and lots more! We gave in our thoughts, ideas, solutions, and amendments based on our role, backed up with reliable sources of evidence. Many of my friends across the grades showed a lot of confidence, while some were shy – but still gave it their all! In the evening, both the panel groups had a reflection session together, sharing on what went right on Day 1 and how we can do better in Day 2. We also had the much-awaited Award Ceremony!

Fast forwarding on to the second day (18th Aug) – I did burn the midnight oil (again!) If, that is what you are wondering about, but it was worth it!

I was the representative of Dr. Beela Rajesh IAS – former Health Secretary of TN, who handled the initial surge of Covid-19 situation. This day was all about the Pandemic – what were the challenges we (our delegation) faced, what we can do to make it better in the future. The same routine followed – 90 second speech, followed by the debates. Here again, I got to know the challenges faced by citizens, government authorities, daily wage workers, and other people from different backgrounds as well. This time, most of the participants spoke out, with more data and statistics to prove their points and arguments!

In the reflection sessions, we discussed our new learnings (I had a lot!), improvements and more! Teachers, students, and visitors felt the Moderators deserved a huge pat on the back, for handling the events so well! It's true, they rocked it!

I learnt that there is no end to learning! I also learnt a LOT of facts, statistics, and trivia – which I previously was clueless. Most importantly, I learnt about perspectives, and how they play an important factor in life. A solution which might seem flawless to the Minister, might have major issues with regards to a teacher or a parent.

To close the event, awards to the Best Speakers, Emergent Speakers, and Special Mentions were handed out, resulting in a lot happy, proud smiles in students across all the grades. This was followed by a super hyped-up motivational dance, to keep the traditions going! Most were in their element – singing, dancing, and jamming along to the tune while others just revelled in the music. This was an amazing finish to the whole event!

I got an opportunity to shape up a lot of my skills – analysis, problem-solving, planning, time management, public speaking, and how to put my thoughts across in an orderly fashion. Most importantly, I learnt that data, statistics, facts and figures are the best way to support an argument, or a statement. I have learnt to look up for information from reliable sources like UN, WHO, our Government websites, for policies and directives.

There is one thing that I have learnt from being a proud Student of BMIS – 'Prepare to be wowed every single time!'

I believe that, when opportunities are presented before us, we need to make a deliberate choice to work for it, give it our best. That's the only way to nurture our skills.

Dear Reader – Now, are you wishing to be a part of our future Global Analytica? Well, you might get a chance!

Until next time!`,
      storyTheme: "learning",
      color: "from-[#54BAB9] to-[#F7ECDE]",
    },
    {
      title: "A World Away from Social Media",
      author: "Samyuktha Chandrashekar",
      grade: "Grade 7",
      date: "February 25, 2021",
      excerpt:
        "It depends upon how it is being used. Let's filter the negativity, use it in the right way and enjoy its benefits!",
      fullContent: `Envisioning a world away from Social media – An interesting debatable topic!

Our daily life revolves around social media. In these current times this has become essential for everyone. How about envisioning a world without social media? Would it affect human lifestyle?

News, entertainment and education is provided through various platforms. This is my utopian version of a world without social media:

We will start remembering our loved one's birthdays without the notifications from facebook. Calling or visiting our loved ones to spend quality time with them, would bring a broad smile across everyone's face! Cyber crime would cease and the world would become a better place to live in.

Most of us have almost forgotten the word 'privacy' after the usage of facebook and other apps and our private life would remain PRIVATE. Everyone in this world will be able to maintain great mental and physical health. Misinformation and spreading of fake news would reduce drastically. Am sure everyone would agree to this!

Let's take a look at the other side of the coin:

Access to information might be a challenge as almost anything and everything depends on social media-We will be disconnected from the world especially during tough times like this pandemic.

Social media is a great platform helping us create new relationships irrespective of age, ideas and geographical barriers; which is considered as having a better social life. It also allows us to share and showcase our opinions, thoughts and ideas to the world.

Social media has created amazing opportunities and lends a great exposure to learn new things!

It depends upon how it is being used. Let's filter the negativity,use it in the right way and enjoy its benefits!`,
      storyTheme: "balance",
      color: "from-[#F7ECDE] to-[#54BAB9]",
    },
    {
      title: "COVID Dream Story",
      author: "Sai Arun Prasaad",
      grade: "Grade 5",
      date: "September 26, 2020",
      excerpt: "Let us learn and cross over the pandemic. And be good for all living things!",
      fullContent: `Hello everyone! My name is Sai Arun Prasaad! I am a fifth-grader. I like to do exams and tests. But what I treasure a lot is being able to go outside and meet people. Now though this has changed.

On March 27, 2020, the COVID-19 virus began sneaking into India. It has already begun sneaking into other parts of the Globe. Because of this, our school was canceled for four days. Then a few weeks. Thereafter one month after which our school was closed for that term. It was told they would start school again after the lockdown was over. I was devasted, "What!! No exams! End of the year final Feast!! No class end Celebration!". I thought that was a big summer. "At least we can go to Muscat". I said to myself. I never knew how wrong I was about that.

On April 7th, 2020, my mom told me the sad news. "Oman has also been sealed by COVID-19. The Sultanate has removed all airlines from India to Muscat. So, I had lost a great opportunity to be in an answer beach resort. I was sadder than ever now. No school! No tourism! Very bad!

I had two months of nothing but loneliness until June when they said that online school would start. At least that. But now I had something else which was saddening. My birthday was coming up. So instead of having a party with all my friends, I was forced to have a normal and dull day. Awesome.

You saw how hard COVID-19 hit me.

It was one of the normal, uneventful days. I was resting for a bit. I don't sleep while I took rest but this time I did sleep. I woke up with an ugly looking thing right in front of me. I had a strange aura around me. I thought, where am I? And then I decided to ask that thing in front of a meme, more about this place. But first I asked the creature, "Who are you?" It replied in a crackly voice. "I am the Coronavirus King. My name is Cavalry Online International COVID, III. You can call me CCOVID 3 for short".

Anger swelled inside of me. Was the thing the Leader of COVID19 virus collection? The one that made sure our school did not have any last term exams. The one that made me cancel a resort stay in Muscat. The one that hanged my birthday into a dull day. I wanted to kick it into a million pieces.

I asked the thing, "Why have you done all of this?" it replied calmly. "I know everything I have done to humanity. I can even justify it". "Then justify why you locked us in our home?", I asked.

"To make you happy with what you've got. You, humans, are very unfair. You want to make sure you are superior to everyone. You think you are the only living thing in the universe. You wish everyone to see from your perspective. You don't care what you do to anyone if it benefits you. You want more and more. You don't think that the meat that you eat is all killed living things? You don't see from other creatures' point of view. You wish to be happy all by yourself". You never see, anything from anyone else's point of view. Then what is wrong with us attacking?" "CCOVID3 said.

I felt like I had been punched on my face badly. I now accepted that COVID19 was our tutor. Then I woke up with a start in my bed, in between my rest.

Friends,

Let us learn and cross over the pandemic. And be good for all living things!`,
      storyTheme: "empathy",
      color: "from-[#9ED2C6] to-[#E9DAC1]",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=1200&text=Student+Voices"
          alt="Student Voices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#54BAB9]/80 to-[#9ED2C6]/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Student Voices</h1>
            <p className="text-xl max-w-2xl">Authentic stories of resilience, growth, and discovery</p>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Theme Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(themeData).map(([key, themeInfo]) => (
              <div key={key} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <themeInfo.icon className="w-4 h-4 text-[#54BAB9]" />
                <span className="text-sm font-medium text-gray-700">{themeInfo.label}</span>
              </div>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid gap-12">
            {stories.map((storyItem, index) => {
              const IconComponent = themeData[storyItem.storyTheme].icon
              return (
                <article key={index} className="group">
                  <div
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${storyItem.color} p-1 hover:shadow-2xl transition-all duration-500`}
                  >
                    <div className="bg-white rounded-3xl p-8 md:p-12 h-full">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Story Content */}
                        <div className="md:col-span-2 space-y-6">
                          {/* Header */}
                          <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className={`p-3 rounded-2xl bg-gradient-to-r ${storyItem.color}`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold text-[#54BAB9] group-hover:text-[#54BAB9]/80 transition-colors">
                                {storyItem.title}
                              </h2>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  <span className="font-medium">{storyItem.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-4 h-4" />
                                  <span>{storyItem.grade}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{storyItem.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Excerpt */}
                          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#54BAB9]">
                            <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
                              "{storyItem.excerpt}"
                            </p>
                          </div>

                          {/* Content Preview */}
                          <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                              {storyItem.fullContent.substring(0, 300)}...
                            </p>
                          </div>

                          {/* Read More Button */}
                          <button
                            onClick={() => setSelectedStory(storyItem)}
                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${storyItem.color} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                          >
                            <span>Read Full Story</span>
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                          {/* Author Card */}
                          <div className="bg-gray-50 p-6 rounded-2xl">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-[#54BAB9] rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-800">{storyItem.author}</h3>
                                <p className="text-sm text-gray-600">{storyItem.grade}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">
                              Student perspective on navigating challenges and finding growth opportunities.
                            </p>
                          </div>

                          {/* Theme Badge */}
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${storyItem.color} text-white text-center`}>
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <IconComponent className="w-5 h-5" />
                              <span className="font-semibold">{themeData[storyItem.storyTheme].label}</span>
                            </div>
                            <p className="text-sm opacity-90">Core theme of this story</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#54BAB9]">{selectedStory.title}</h2>
                <p className="text-gray-600">
                  {selectedStory.author} - {selectedStory.grade}
                </p>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="prose prose-gray max-w-none">
                {selectedStory.fullContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      <div className="py-24 bg-gradient-to-br from-[#F7ECDE] via-[#E9DAC1] to-[#9ED2C6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#54BAB9] mb-6">The Power of Student Voices</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These stories represent more than individual experiences—they showcase the resilience, creativity, and
              wisdom of our student community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#54BAB9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resilience</h3>
              <p className="text-gray-600">Finding strength in challenging times</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#9ED2C6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">Creative solutions to new problems</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#E9DAC1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#54BAB9]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Global Perspective</h3>
              <p className="text-gray-600">Understanding our interconnected world</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#F7ECDE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#54BAB9]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Growth</h3>
              <p className="text-gray-600">Learning and evolving through experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
