
import { Language, Content } from '../types';

export const content: Record<Language, Content> = {
  [Language.IT]: {
    title: "Guida al Prompting AI",
    subtitle: "Impara a generare app e a costruire prompt efficaci per l'AI.",
    generateApps: {
      title: "Come Generare Applicazioni Complete",
      description: "Sono specializzato nella creazione di applicazioni web React complete con TypeScript e Tailwind CSS. Per ottenere i migliori risultati, fornisci una richiesta dettagliata. Più sei specifico, migliore sarà il risultato. Ecco gli elementi chiave da includere:",
      steps: [
        {
          title: "1. Stack Tecnologico",
          text: "Specifica sempre le tecnologie. Ad esempio: 'Usa React 18+, TypeScript e Tailwind CSS'."
        },
        {
          title: "2. Funzionalità Principale",
          text: "Descrivi chiaramente cosa deve fare l'app. Ad esempio: 'Un'app per la gestione delle attività', 'Una dashboard per il meteo', 'Un portfolio personale'."
        },
        {
          title: "3. Design e UI/UX",
          text: "Descrivi l'aspetto e il comportamento dell'app. Ad esempio: 'Design minimalista con tema scuro', 'Layout a tre colonne', 'Un header sticky con navigazione'."
        },
        {
          title: "4. Componenti Specifici",
          text: "Elenca i componenti UI necessari. Ad esempio: 'Un modale per aggiungere nuove attività', 'Un grafico a barre per visualizzare le statistiche', 'Card con effetto hover'."
        },
        {
          title: "5. Integrazione API (se necessaria)",
          text: "Menziona se l'app deve comunicare con API esterne. Ad esempio: 'Usa l'API di Gemini per riassumere testi', 'Recupera dati da un'API pubblica di notizie'."
        }
      ]
    },
    buildPrompts: {
      title: "Come Costruire Prompt Efficaci",
      description: "Un prompt ben strutturato è la chiave per sbloccare il pieno potenziale dell'AI. Segui questi principi per creare richieste chiare, concise ed efficaci.",
      principles: [
        {
          title: "Principio 1: Sii Specifico e Chiaro",
          text: "Le richieste vaghe portano a risultati generici. Definisci esattamente ciò che vuoi.",
          badExample: {
            title: "Cattivo ❌",
            code: "Crea una bella app."
          },
          goodExample: {
            title: "Buono ✅",
            code: "Crea una moderna dashboard per la finanza personale con tema scuro, utilizzando React e Tailwind CSS. Deve avere una tabella per le transazioni e un grafico a torta per le categorie di spesa."
          }
        },
        {
          title: "Principio 2: Fornisci Contesto",
          text: "Il contesto aiuta l'AI a capire l'ambito e lo scopo della tua richiesta.",
          badExample: {
            title: "Cattivo ❌",
            code: "Aggiungi un pulsante."
          },
          goodExample: {
            title: "Buono ✅",
            code: "Nell'header, aggiungi un pulsante di call-to-action principale nell'angolo in alto a destra con il testo 'Nuova Transazione'. Deve essere di colore blu indaco."
          }
        },
        {
          title: "Principio 3: Definisci i Vincoli",
          text: "Imposta limiti e requisiti per guidare l'output dell'AI.",
          badExample: {
            title: "Cattivo ❌",
            code: "Mostra dei dati."
          },
          goodExample: {
            title: "Buono ✅",
            code: "Visualizza le ultime 5 transazioni in una tabella. La tabella deve avere le colonne 'Data', 'Descrizione' e 'Importo', con l'importo formattato come valuta."
          }
        },
        {
          title: "Principio 4: Struttura la tua Richiesta",
          text: "Organizza prompt complessi usando intestazioni, elenchi puntati o sezioni per renderli facili da seguire.",
          badExample: {
            title: "Cattivo ❌",
            code: "Voglio un'app per ricette che cerchi, salvi le preferite e abbia un design carino."
          },
          goodExample: {
            title: "Buono ✅",
            code: `Agisci come un ingegnere frontend senior e crea un'app di ricette.

**Stack Tecnologico:** React 18, TypeScript, Tailwind CSS.

**Funzionalità:**
- Pagina principale con una barra di ricerca.
- Visualizzazione dei risultati di ricerca in una griglia di card.
- Cliccando su una card si apre una pagina di dettaglio della ricetta.
- Un pulsante per 'salvare' le ricette nei preferiti.

**Design:**
- Tema chiaro e pulito.
- Layout responsive.
- Le card delle ricette devono mostrare un'immagine, il titolo e il tempo di cottura.`
          }
        }
      ]
    },
    footer: "Costruito con l'aiuto dell'AI."
  },
  [Language.EN]: {
    title: "AI Prompting Guide",
    subtitle: "Learn how to generate apps and build effective prompts for AI.",
    generateApps: {
      title: "How to Generate Full Applications",
      description: "I specialize in creating complete React web applications with TypeScript and Tailwind CSS. To get the best results, provide a detailed request. The more specific you are, the better the outcome. Here are the key elements to include:",
      steps: [
        {
          title: "1. Technology Stack",
          text: "Always specify the technologies. For example: 'Use React 18+, TypeScript, and Tailwind CSS'."
        },
        {
          title: "2. Core Functionality",
          text: "Clearly describe what the app should do. For example: 'A to-do list manager', 'A weather dashboard', 'A personal portfolio'."
        },
        {
          title: "3. Design and UI/UX",
          text: "Describe the look and feel of the app. For example: 'Minimalist design with a dark theme', 'A three-column layout', 'A sticky header with navigation'."
        },
        {
          title: "4. Specific Components",
          text: "List the UI components needed. For example: 'A modal for adding new tasks', 'A bar chart to display statistics', 'Cards with a hover effect'."
        },
        {
          title: "5. API Integration (if any)",
          text: "Mention if the app needs to talk to external APIs. For example: 'Use the Gemini API for text summarization', 'Fetch data from a public news API'."
        }
      ]
    },
    buildPrompts: {
      title: "How to Build Effective Prompts",
      description: "A well-structured prompt is the key to unlocking the AI's full potential. Follow these principles to create requests that are clear, concise, and effective.",
      principles: [
        {
          title: "Principle 1: Be Specific & Clear",
          text: "Vague requests lead to generic results. Define exactly what you want.",
          badExample: {
            title: "Bad ❌",
            code: "Make a nice app."
          },
          goodExample: {
            title: "Good ✅",
            code: "Create a modern, dark-themed personal finance dashboard using React and Tailwind CSS. It should feature a transaction table and a pie chart for spending categories."
          }
        },
        {
          title: "Principle 2: Provide Context",
          text: "Context helps the AI understand the scope and purpose of your request.",
          badExample: {
            title: "Bad ❌",
            code: "Add a button."
          },
          goodExample: {
            title: "Good ✅",
            code: "In the header, add a primary call-to-action button in the top-right corner with the text 'New Transaction'. It should be indigo-colored."
          }
        },
        {
          title: "Principle 3: Define Constraints",
          text: "Set boundaries and requirements to guide the AI's output.",
          badExample: {
            title: "Bad ❌",
            code: "Show some data."
          },
          goodExample: {
            title: "Good ✅",
            code: "Display the last 5 transactions in a table. The table should have 'Date', 'Description', and 'Amount' columns, with the amount formatted as currency."
          }
        },
        {
          title: "Principle 4: Structure Your Prompt",
          text: "Organize complex prompts using headings, bullet points, or sections to make them easy to follow.",
          badExample: {
            title: "Bad ❌",
            code: "I want a recipe app that searches, saves favorites, and looks nice."
          },
          goodExample: {
            title: "Good ✅",
            code: `Act as a senior frontend engineer and create a recipe app.

**Tech Stack:** React 18, TypeScript, Tailwind CSS.

**Features:**
- A main page with a search bar.
- Display search results in a grid of cards.
- Clicking a card opens a recipe detail page.
- A button to 'save' recipes to favorites.

**Design:**
- Clean, light theme.
- Responsive layout.
- Recipe cards should show an image, title, and cooking time.`
          }
        }
      ]
    },
    footer: "Built with the help of AI."
  }
};
