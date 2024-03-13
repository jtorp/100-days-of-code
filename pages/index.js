import HelloWorld from "../components/hello-world";
import Cursor from "../components/cursor/cursor";
import { Marquee } from '../components/marquee'

export default function Home() {
  return (
    <div className="app">
      <Cursor/>
      <Marquee duration={10}>
          <span className='p-s'> 100 days of code ✧ vanilla JavaScript ✧ 100 days of code ✧ vanilla JavaScript ✧ 100 days of code ✧ vanilla JavaScript ✧ 100 days of code ✧ vanilla JavaScript</span>
        </Marquee>
      <HelloWorld />
    </div>
  );
}
