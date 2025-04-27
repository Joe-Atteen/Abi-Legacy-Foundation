import Summary from "@/components/Summary";
import Founder from "@/components/Founder-alt";
import Activities from "@/components/Activities-CTA";
import News from "@/components/News";
import Video from "@/components/Video";
import Work from "@/components/Work";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <div>
      <Video />
      <div>
        <Work />
      </div>
      <div className="container mx-auto">
        <Summary />
      </div>
      <div className="">
       <Mission />
      </div>
      <div className="container mx-auto">
        <Founder />
      </div>
      <Activities />
      <div className="container mx-auto">
        <News />
      </div>
    </div>
  );
}
