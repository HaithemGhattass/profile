import React, { forwardRef } from "react";
import FeaturedProject from "../components/FeaturedProject";
import EcommerceProject from "../components/EcommerceProject";
import DesignSystemProject from "../components/DesignS";
import SectionHeader from "../components/SectionHeader";
const Work = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="work" className="mb-32 scroll-mt-28">
      <SectionHeader title="Selected Work" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeaturedProject />
        <EcommerceProject />
        <DesignSystemProject />
      </div>
    </section>
  );
});

export default Work;