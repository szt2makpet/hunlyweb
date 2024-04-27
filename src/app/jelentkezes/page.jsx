'use client'
'use state'

import * as React from 'react';
import { useState } from 'react';
import Link from "next/link";
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import * as emailjs from 'emailjs-com';


function App() {
  const sentEmail = (e) => {
  
    e.preventDefault();

    emailjs.sendForm('service_v5ejwls', 'template_8ccph5f', e.target, '8ZrCxg4L-o1HSbfuP');
  }
  return (
      <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Kapcsolat felvétel
      </h2>
      <p class="mt-2 text-sm text-gray-700">Jelentkezz hozzánk még ma!</p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2" onSubmit={sentEmail}
      >
               <TextField
          label="Neved*"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Instagram"
          name="last_name"
          type="text"
          autoComplete="family-name"
          
        />
          <TextField
          className="col-span-full"
          label="Telefonszám*"
          name="telefon_from"
          type="tel"
          autoComplete="tel"
          required 
        />
        <TextField
          className="col-span-full"
          label="Email*"
          name="email_from"
          type="email"
          autoComplete="email"
          required 
        />
         <SelectField
          className="col-span-full"
          label="Arccal vagy arc nélkül tervezed?"
          name="withface_from"
        >
          <option>Kérjük válassz</option>
          <option>Arccal</option>
          <option>Arc nélkül</option>
        </SelectField>
        <TextField
          className="col-span-full"
          label="Üzeneted*"
          name="message"
          type="text"
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="purple" className="w-full">
            <span>
              Küldés <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  );
}

export default App;