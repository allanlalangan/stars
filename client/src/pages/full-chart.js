import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const FullChartPage = ({ charts }) => {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [selectedChart, setSelectedChart] = useState(null);
  const [svgString, setSvgString] = useState(null);

  useEffect(() => {
    const chart = charts?.find((chart) => chart._id === id);
    setSelectedChart(chart);
  }, [id, user, charts]);

  useEffect(() => {
    setSvgString(
      encodeURIComponent(
        `${
          selectedChart?.chart_image?.split(
            "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><!--- This file is part of Kerykeion and is based on OpenAstro.org -->"
          )[1]
        }`
      )
    );
  }, [selectedChart]);

  return (
    <div>
      <figure className='flex'>
        {/* <img
          alt='natal chart wheel'
          src={`url("data:image/svg+xml;base64,${btoa(svgString)}")`}
        /> */}
        <div
          className='h-[330px] w-[470px] sm:h-[350px] sm:w-[490px] md:h-[385px] md:w-[550px] lg:h-[500px] lg:w-[700px]'
          style={{
            background: `url("data:image/svg+xml;utf8,${svgString}")`,
          }}
        />
      </figure>
      <h3>Summary of {selectedChart?.name}'s chart</h3>
      <section></section>
    </div>
  );
};
export default FullChartPage;
