const NatalPlacements = ({ placements }) => {
  return (
    <article>
      <ul>
        {placements?.map((planet, i) => (
          <li key={i}>
            <h4>{planet.name}</h4>
            <p>
              {planet.sign} {+planet.normDegree.toFixed(2)}°
            </p>
          </li>
        ))}
        <li></li>
      </ul>
    </article>
  );
};
export default NatalPlacements;
