import HelloWorld from "../components/hello-world";
import Cursor from "../components/cursor/cursor";
import { Marquee } from '../components/marquee'

export default function Home() {
  return (
    <div className="app">
      <Cursor/>
      <Marquee duration={12}>
          <span className='p-xs'>I'm the 𝖈𝖔𝖓𝖉𝖚𝖎𝖙 to your 𝓦𝓲𝓵𝓭𝓮𝓼𝓉 development dreams  ⏤  Julia ✧   I'm the 𝖈𝖔𝖓𝖉𝖚𝖎𝖙 to your 𝓦𝓲𝓵𝓭𝓮𝓼𝓉 development dreams  ⏤  Julia ✧ I'm the 𝖈𝖔𝖓𝖉𝖚𝖎𝖙 to your 𝓦𝓲𝓵𝓭𝓮𝓼𝓉 development dreams  ⏤  Julia  ✧ </span>
        </Marquee>
      <HelloWorld />
    </div>
  );
}
