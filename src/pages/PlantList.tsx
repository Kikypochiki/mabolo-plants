import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPlants } from '../data/plants';
import './PlantList.css';

function PlantList() {
  const plants = getAllPlants();
  const [search, setSearch] = useState('');

  const filtered = plants.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.scientificName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-page">
      <div className="search-wrap animate-fade-up">
        <div className="search-box">
          <svg className="search-svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search plants"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button
              className="search-clear"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="plant-count animate-fade-up s1">
        <span>{filtered.length} {filtered.length === 1 ? 'plant' : 'plants'}</span>
      </div>

      {filtered.length === 0 ? (
        <div className="empty animate-scale">
          <span className="empty-icon">🌱</span>
          <p>No plants match &ldquo;{search}&rdquo;</p>
        </div>
      ) : (
        <ul className="plant-list">
          {filtered.map((plant, i) => (
            <li
              key={plant.id}
              className={`animate-fade-up s${Math.min(i + 2, 16)}`}
            >
              <Link to={`/plant/${plant.id}`} className="plant-row">
                <div className="plant-thumb">
                  <img
                    src={plant.imageUrl}
                    alt={plant.name}
                    className="plant-img"
                    width="56"
                    height="56"
                    loading={i < 6 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <div className="plant-info">
                  <h2 className="plant-name">{plant.name}</h2>
                  <p className="plant-sci">
                    <em>{plant.scientificName}</em>
                  </p>
                </div>
                <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlantList;
