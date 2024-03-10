import Menu from '@/components/menu';
import { LampDemo } from '@/components/ui/lamp';
import { TracingBeam } from '../components/ui/tracing-beam';
export default function Home() {
  return (
    <TracingBeam>
      <div className="">
        <LampDemo />
        <LampDemo />
        <LampDemo />
        <h1 className="bg-main_background text-foreground">hello word</h1>
        <Menu />

      </div>
    </TracingBeam>

  );
} 
