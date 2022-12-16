import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FullChartPage = ({ charts }) => {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [selectedChart, setSelectedChart] = useState(null);
  const [svgString, setSvgString] = useState(null);
  const birthdate = new Date(
    selectedChart?.year,
    selectedChart?.month - 1,
    selectedChart?.day,
    selectedChart?.hour,
    selectedChart?.minute,
    0
  );

  useEffect(() => {
    const chart = charts?.find((chart) => chart._id === id);
    setSelectedChart(chart);
  }, [id, user, charts]);

  console.log(selectedChart);
  // encode svg string
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
    <section>
      <figure className="flex">
        {/* <img
          alt="natal chart wheel"
          src={`url("data:image/svg+xml;base64,${btoa(svgString)}")`}
        /> */}
        <div
          className="h-[330px] w-[470px] sm:h-[350px] sm:w-[490px] md:h-[385px] md:w-[550px] lg:h-[500px] lg:w-[700px]"
          style={{
            background: `url("data:image/svg+xml;utf8,${svgString}")`,
          }}
        />
      </figure>
      {selectedChart && (
        <>
          <h3 className="font-display">{selectedChart.name}'s chart</h3>
          <article>
            <p>
              {selectedChart.name} was born on{" "}
              {`${birthdate.toDateString()} ${birthdate
                .toLocaleTimeString("en-US")
                .replace(":00 ", " ")}`}
            </p>
            <p>Birthplace: {selectedChart.city}</p>
          </article>
          <article>
            <h4>Placements</h4>
            <ul>
              <li>
                {`Sun: ${selectedChart.planets.sun.position.toFixed(2)}° ${
                  selectedChart.planets.sun.sign
                }`}
              </li>
              <li>{`Moon: ${selectedChart.planets.moon.position.toFixed(2)}° ${
                selectedChart.planets.moon.sign
              }`}</li>
              <li>{`Rising: ${selectedChart.houses.first_house.position.toFixed(
                2
              )}° ${selectedChart.houses.first_house.sign}`}</li>
              <li>{`Mercury: ${selectedChart.planets.mercury.position.toFixed(
                2
              )}° ${selectedChart.planets.mercury.sign}`}</li>
              <li>{`Venus: ${selectedChart.planets.venus.position.toFixed(
                2
              )}° ${selectedChart.planets.venus.sign}`}</li>
              <li>{`Mars: ${selectedChart.planets.mars.position.toFixed(2)}° ${
                selectedChart.planets.mars.sign
              }`}</li>
              <li>{`Jupiter: ${selectedChart.planets.jupiter.position.toFixed(
                2
              )}° ${selectedChart.planets.jupiter.sign}`}</li>
              <li>{`Saturn: ${selectedChart.planets.saturn.position.toFixed(
                2
              )}° ${selectedChart.planets.saturn.sign}`}</li>
              <li>{`Uranus: ${selectedChart.planets.uranus.position.toFixed(
                2
              )}° ${selectedChart.planets.uranus.sign}`}</li>
              <li>{`Neptune: ${selectedChart.planets.neptune.position.toFixed(
                2
              )}° ${selectedChart.planets.neptune.sign}`}</li>
              <li>{`Pluto: ${selectedChart.planets.pluto.position.toFixed(
                2
              )}° ${selectedChart.planets.pluto.sign}`}</li>
              <li>{`North Node: ${selectedChart.planets.true_node.position.toFixed(
                2
              )}° ${selectedChart.planets.true_node.sign}`}</li>
            </ul>
            <ul>
              <li>{}</li>
            </ul>
          </article>
          <article>
            <h4>Chart Details</h4>
          </article>
        </>
      )}
    </section>
  );
};
export default FullChartPage;
