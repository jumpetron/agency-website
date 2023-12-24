import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { testimonials } from "../../Common/data";
import ourClientIcon from "../../assets/images/icon/our-clients.svg";
import testimonialStyle from "./Testimonial.module.css";

const Testimonial = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
      breakpoints: {
        "(max-width: 984px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(max-width: 640px)": {
          slides: {
            perView: 1,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section className={testimonialStyle.testimonialSection}>
      <div className="container">
        <div>
          <div className={testimonialStyle.titleSection}>
            <img src={ourClientIcon} alt="" />
            <p>Our Clients</p>
          </div>
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`keen-slider__slide number-slide1 ${testimonialStyle.slide}`}
              >
                <div className={testimonialStyle.review}>
                  <p>“{item.review}”</p>
                </div>
                <div className={testimonialStyle.personDetails}>
                  <div className={testimonialStyle.personImg}>
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <small>{item.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
