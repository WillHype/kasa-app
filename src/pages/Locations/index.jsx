import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataLogements from "../../data/logements.json";
import Carousel from "../../components/carrousel";
import Collapsible from "../../components/collapsible";
import '../Locations/_index.scss';
import { ReactComponent as Star } from '../../assets/star-solid.svg';




function Locations (){
    const { id } = useParams();
    const location = dataLogements.find((item) => item.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!location) {
          navigate('/Error');
        }
      }, [location, navigate]);
  
      if (!location) {
          return null;
      };

      const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index + 1}
                style={{
                    fill: index + 1 <= rating ? '#FF6060' : "#E3E3E3",
                    marginRight: "2px"
                }}
            />
        ));
    };
    
    return(
        <>
        <Carousel location={location}/>
        <main className="container">
        <section className="description-section">
                <div className="description-container">
                    <h1 className="description__title">{location.title}</h1>
                    <p className="description__subtitle">{location.location}</p>
                    <div className="description__tags">
                        {location.tags.map((tags) =>(
                            <span key={tags + location.id} className="description__tags--item">{tags}</span>
                        ))}
                    </div>
                </div>
                <div className="description-aside">
                    <div className="description__host">
                        <h2 className="description__host--name">{location.host.name}</h2>
                        <div className="description__host--container">
                            <img className="description__host--img" src={location.host.picture} alt={location.host.name} />
                        </div>
                    </div>
                    <div className="description__rating">
                    {renderStars(location.rating)}
                    </div>
                </div>
            </section>
            <section className="collapsible__container">
                <Collapsible label='Description' content={location.description} />
                <Collapsible label='Équipements' content={location.equipments} />
            </section>
        </main>
        </>
    )
}

export default Locations;