import ProtoTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats = [] }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.statItem}
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.prototype = {
  title: ProtoTypes.string,
  stats: ProtoTypes.arrayOf(
    ProtoTypes.shape({
      id: ProtoTypes.string,
      label: ProtoTypes.string,
      percentage: ProtoTypes.number,
    }),
  ).isRequired,
};


