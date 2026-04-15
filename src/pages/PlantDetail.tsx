import { useParams, Link } from 'react-router-dom';
import { getPlantById } from '../data/plants';
import './PlantDetail.css';

function PlantDetail() {
  const { id } = useParams<{ id: string }>();
  const plant = id ? getPlantById(id) : undefined;

  if (!plant) {
    return (
      <div className="not-found animate-scale">
        <span className="nf-icon">🍂</span>
        <h1>Not Found</h1>
        <p>This plant isn&apos;t in our collection.</p>
        <Link to="/" className="btn-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to all plants
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Hero */}
      <div className="detail-hero animate-fade">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="hero-img"
          width="480"
          height="280"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="detail-body">
        <header className="detail-header animate-fade-up s1">
          <Link to="/" className="btn-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <h1 className="detail-title">{plant.name}</h1>
          <p className="detail-sci">
            <em>{plant.scientificName}</em>
          </p>
        </header>

        {/* About */}
        <section className="card animate-fade-up s2">
          <h2 className="card-label">
            <span className="label-dot" />
            About
          </h2>
          <p className="card-text">{plant.description}</p>
        </section>

        {/* Benefits */}
        <section className="card animate-fade-up s3">
          <h2 className="card-label">
            <span className="label-dot green" />
            Health Benefits
          </h2>
          <ul className="benefits">
            {plant.healthBenefits.map((b, i) => (
              <li
                key={i}
                className={`benefit animate-slide s${Math.min(i + 4, 16)}`}
              >
                <svg className="benefit-check" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="detail-footer animate-fade-up s9">
          <div className="qr-tip">
            <span>📱</span>
            <p>Scan the QR code on this plant to return here</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PlantDetail;
