import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Mennyibe kerül ez nekem?',
      answer:
        'A Hunly ügynökség rugalmas a bérezésben, több opció közül választhatnak a modellek.',
    },
    {
      question: 'Mitől jobb a Ti marketingetek másokétól?',
      answer: 'Teljes marketing stratégiát alakítunk ki számodra, hogy organikusan tudj rengeteg emberhez elérni.',
    },
    {
      question: 'Mire számítsak csatlakozáskor?',
      answer:
        'Egy kellemes online beszélgetésre foglalhatsz nálunk időpontot, ahol felteheted kérdéseid toborzó kollégánknak.',
    },
  ],
  [
    {
      question: 'Csak Magyarországról tudok dolgozni veletek?',
      answer:
        'Természetesen nem. A Hunly-vel bárhol dolgozhatsz mivel bevételed és feladataid helyfüggetlenek.',
    },
    {
      question:
        'Mi van ha nem vagyok veletek elégedett?',
      answer:
        'A szerződés bontás feltételeiről mindkét fél beleegyezésével elállhatsz.',
    },
    {
      question:
        'Mikkel kell foglalkoznom munkám során?',
      answer:
        'Őszintén szólva, a te feladatod csupán a Modellkedés és hogy tájékoztass minket fiókod állapotáról.',
    },
  ],
  [
    {
      question: 'Az arcomat is kell mutatnom?',
      answer:
        'A rövid válasz az hogy nem. Azonban azok a modelleink akik az arcukat is használják gyorsabb növekedést érnek el általában.',
    },
    {
      question: 'Nem vagyok nő, dolgozhatok veletek?',
      answer: 'Általánosságban elmondható hogy a Hunly női OnlyFans modellekkel dolgozik mivel szakmai hozzáértésünk erre specializálódott.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Gyakran ismételt kérdések
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Ha nem találtad meg kérdésedre a választ, írj nekünk üzenetet ide: info@hunly.hu
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
