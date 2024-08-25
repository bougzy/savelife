




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css'; // Import animate.css for animations
import './Home.css'; // Import a custom CSS file for additional styles

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    donate: false,
    team: false,
    news: false,
  });

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/donations');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight;

      sections.forEach((section) => {
        if (scrollPosition > section.offsetTop + 100) {
          setVisibleSections((prev) => ({
            ...prev,
            [section.id]: true,
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Carousel */}
      <Carousel
        id="hero"
        className={`section animate__animated ${
          visibleSections.hero ? 'animate__fadeInDown' : ''
        }`}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/id/1408433530/photo/busy-at-the-food-bank.jpg?s=612x612&w=0&k=20&c=LFQg9e7nYH1fIKbswzPfrPyPqimdKvTE5bCNaxX65B0="
            alt="Join Our Cause"
          />
          <Carousel.Caption>
            <h3 className="display-4 text-shadow">Save a Life Today</h3>
            <p className="lead text-shadow">
              Your donation can make a huge difference in someone's life.
            </p>
            <Button variant="light" className="btn-lg">Donate Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/id/1326492620/photo/humanitarian-aid-on-the-disaster-zone.jpg?s=612x612&w=0&k=20&c=8jcXPFuB3307Rud-GudG-eaQc4mAdWjBvkHsWcW-8f8="
            alt="Become a Hero"
          />
          <Carousel.Caption>
            <h3 className="display-4 text-shadow">Become a Hero</h3>
            <p className="lead text-shadow">
              Support our humanitarian services and change lives.
            </p>
            <Button variant="light" className="btn-lg">Join Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/id/1320587271/photo/food-drive-volunteers-working-together.jpg?s=612x612&w=0&k=20&c=z3lvfSJOnMGDzIVCtb8p9l0RIbJcDXn7RnBS_wGkq4k="
            alt="Every Little Helps"
          />
          <Carousel.Caption>
            <h3 className="display-4 text-shadow">Every Little Helps</h3>
            <p className="lead text-shadow">
              Your generosity fuels our mission to save lives.
            </p>
            <Button variant="light" className="btn-lg">Get Involved</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* About Us Section */}
      <Container className="my-5 section" id="about">
        <Row
          className={`animate__animated ${
            visibleSections.about ? 'animate__fadeInLeft' : ''
          }`}
        >
          <Col>
            <div className="p-5 bg-light rounded shadow-sm">
              <h1 className="display-4">About Save a Life</h1>
              <p className="lead">
                We are a humanitarian organization dedicated to saving lives and providing aid to those in need.
                Our mission is to bring hope and support to communities worldwide through generous donations and volunteer efforts.
              </p>
              <Button variant="primary" size="lg" className="mt-3"><Link  className="text-white" to="/about">Learn More</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* How It Works Section */}
      <Container className="my-5 section bg-primary text-white p-5" id="donate">
        <h2 className="text-center mb-5 text-white fw-bold bg-secondary p-4 rounded-3">How It Works</h2>
        <Row>
          <Col md={4} className="text-center mb-4">
            <div
              className={`animate__animated ${
                visibleSections.donate ? 'animate__zoomIn' : ''
              }`}
            >
              
              <h4>Make a Donation</h4>
              <p>Your contribution helps us provide essential aid to those in need.</p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className={`animate__animated ${
              visibleSections.donate ? 'animate__zoomIn' : ''
            }`}>
              
              <h4>We Deliver</h4>
              <p>Our team ensures that all donations are distributed efficiently and effectively.</p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className={`animate__animated ${
              visibleSections.donate ? 'animate__zoomIn' : ''
            }`}>
              
              <h4>See the Impact</h4>
              <p>Stay updated with the positive changes your support makes in communities.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Donations Section */}
      <Container className="section" id="donations">
        <h2 className="my-4 text-center">Current Donation Campaigns</h2>
        {donations.length > 0 ? (
          <Row>
            {donations.map((donation) => (
              <Col key={donation._id} md={4} className="mb-4">
                <Card className={`animate__animated ${
                  visibleSections.donate ? 'animate__fadeInUp' : ''
                } shadow-sm`}>
                  {donation.mediaType === 'image' ? (
                    <Card.Img
                      variant="top"
                      src={`data:image/jpeg;base64,${donation.media}`}
                      alt={donation.title}
                    />
                  ) : (
                    <video
                      controls
                      src={`data:video/mp4;base64,${donation.media}`}
                      className="img-fluid"
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{donation.title}</Card.Title>
                    <Card.Text>{donation.description}</Card.Text>
                    <Button variant="success">Donate Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No donation campaigns available at the moment.</p>
        )}
      </Container>


      

      {/* News Section */}
      <Container className="my-5 section" id="news">
        <h2 className="text-center mb-5">Latest News</h2>
        <Row className={`animate__animated ${
          visibleSections.news ? 'animate__fadeInUp' : ''
        }`}>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>New Partnership Announcement</Card.Title>
                <Card.Text>
                  We're thrilled to announce our new partnership with XYZ Corporation to expand our humanitarian efforts.
                </Card.Text>
                <Button variant="info">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Upcoming Charity Event</Card.Title>
                <Card.Text>
                  Join us for our annual charity event to raise funds and awareness for our mission.
                </Card.Text>
                <Button variant="info">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
       {/* Sponsors Section */}
       <Container className="my-5 section" id="sponsors">
        <h2 className="text-center mb-5">Our Sponsors</h2>
        <Row className={`animate__animated ${visibleSections.sponsors ? 'animate__fadeInUp' : ''}`}>
          <Col md={4} className="text-center mb-4">
            <img
              src="data:image/png;base64,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"
              alt="UNICEF"
              className="img-fluid w-25"
            />
          </Col>
          <Col md={4} className="text-center mb-4">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAkFBMVEX///8Ajs4AjM0AicwAhssAg8oAgMn3+/37/f4Afcjo8vl0sd3y+Pyaxubu9vvk8Pja6/bS5/TL4vKq0eq82u6y1ezE3vCBuN9Fn9UyldGhyuePw+Q3mtMokM+LvuJYpNdcq9poqdlnsdwAeMZ8veJqotZJpddJmdIyi82Cst2ZveEAb8O0z+kAZ8BandSWy+hvUtwWAAAgAElEQVR4nN19CZujtrI2aAHMvu8Y7Om4k9z5Mv//331VWgBh7JmcSW5Ors5znkl320Kl2t5aJCzr7x/13bbtpXT/Fx71dw+34RSIIc6c/NNL+fkxUGKLwa//et6kM5W02KTL/+nF/Oyo7HXw8p9ezM+Onm3E9N4/vZqfG+51I4YN4T+9nJ8bcbMj5vp/iZjoX27Owp2Y8eLfrjPRjjPVP72anx07a0bqf3oxPzsKDQBsMv7rnWbZaWLo8q8HZ3mriflXW+Y4ycrcSm4am7Hecss6S/5tJIVp2V+DWzvdIAJYLUBlZV0335qoKNN/i8dJiyaYO8IdGG1sRXTT/4LiL7k9zsG1+oc1KP3+ArLh1naUOxfWNkOZAweKSen/LbH8rK6G+8guDqfAoz797nRl/Ncs/TD8aPwjf+/Ck2HubOZc6NJnSRxKUSpHaQFo4OOPnhv6SR49gCBqd3P/frFe/7n89a42uVP2neCqXgih/Es3ZK63I/pAjFqkG+YNvXBKpnv2dtaI0Wn4SzUseTjw2HdP9SLqUMa6b0+2qlbEsODpT8l14pQ65O3eD8xmf2HwEA+M2YS+fqQXDxyo7ZozHdCOhjViQZ4L/9v99T4R2IYifC3Ad3g47/6a5I5Xjpygy3v5gSRiDgPxP9+9fNyI8ZMkapprsbcjfjRPzJl6/yU5I8XkTvBda/H94UcUbSsdX30g6Tsg5fYyvs80Z66eVUYfv/zyy+0X88NuceuYMxb+ixlShjMAc342gkgDB2ci7IXCxNXMede8SVVkKj2DxLwaXhVMnC/lC80YhN+lPxvc5TOXcVVz/vcyoNwO3m5ZuhHjZWCxzz8VVgHhpDnfsriVU/DrK+b9yKhbiUVId+ot46HjbKneuQp3JYZevTBob8G1z0832C9azttzxSvllhIW/OfU1CN9lySqb2Dl+jegwK2C3iBmZhQ0sL0NpxxII8pIcPaneFEAj/7H1GSKuzZtT1bsRR11ljeI0R/+6PhvO2KsUPwnuFbyuZxpmZuODh3PXECt4ghCf/uzHkcuMNGJVcJP5k8CQi/FG1I+Olg0bdZpVmIkPdN4xoLweqF28yy3YcM1NcqO/Khlq4RF95o1ELk/8zYbGbdfSlhYLUAJ7KZJTDzrQA1Xxe5nX80JZyf1gloHrEThherH5O06iH/WtArpnhMRJWW8ebE58WB/4SryB2JiGZ0RGllpuxGDmzSdgT3QD2Y/cy1imhpbLMd9/EBGwbvaQna2raDRcdVu79DpRRIsbC58W7JJTDIbxNiUbJPEvhZZdwCuPVn7XcR6E4zLfv1uHt4bLoKN/k0zht6OTA+vDhnP00ZebXNjuYHJGUbp/s+ESDOZuGHDolW1q5FenuynRt/atobB96hxe2qjMHqFXhNtjyyPG4fO597NLYixWCDGcwOq1g3QCGLQie3YQwSD68eQZle67U/d0kt0NFuFvaqNkLDcad9LWtk5or6VdtoqPyW7/MChL0CfW0ymHBFADl6wcgZ3CYLqlu7kEIOkT87GPvu6mzSfGb8ejVpP1PfYgqxJWv62spjOjOH+eFfFGCaJjzcTnATg2E7mwKRL2YEJI9tK2RhlKzHAGTm8fBg3/rE5tjJGKJ0N95sujO6occUCCi2kHBfpRkyFFacDBJeMuD+J2juFu8MtEvcD+NMJLQXIMThZQtt2lW2nwTBbE2MX29LyZSOZFyJkAWsw74Ughn3ZEm2pFMFyZEpexE/wuOqlv6nhrwGuW6aHCI+EMXevX/VX4oYwSpqjr0yD1rf8OwWXlPra/vJCRmNHzog9ua/E0Cm00gt+gnU7QethLWTVm+QqlT27O3KfkG6IlGj3ijUhwBeOMDtUAUQtFu03nVb38EqcZgF0a+5H0X7JZb6fZNaH3HTi6E175gxuUEt3rFE/0W6dF6KobuF0tWkFlVY8luEVaS1prXn0gpjaUUXUbxzZojQjH51VMnvKl9hqTWqAW/QiQyhY16CMlbOuQyIJ0hnEWMkqaCAzXi911NHGNgIl8lN4kP5F1rK7kHUvH/GzPJElRsJfICpwk9K9glqAP1NL4dTWM5aMIeT0wF1skgbAhlFgTAAzj/1daRvfVPOUM5b1sbLmAnImpYcuKy0OPCDrGNGSFzHK5AzxB+wXxQALt4APp7RkF2QfSFTqEDpLfFZemL2ajAzMk/i1u7B1sQBs2N1FhRVaJldI2A4sas4c0GroaGKcykpsJZviTz2lRHy/7piOpNC6XLpUsLuaqP0r/kvwkafEgP5Kd//B7A/ceDd9QMxMOsWYZGQapcUL5cLUhAhshEDhVuhBpn2Aq4k5+uvVPvMPK37IH5w4RlpWEgrCF7VrEcoLOB/hYmaKLlaUS867C1BAxI52kzA8/oC6BgZSCr/bOJuk+AvhQ2jF1wtpJYHDmh8H8yyZ4CZpDlHlxpmkztMVgonN08IVBoql7T0tiBIACx0eQAG1l7Pgw1gJ4u6sUbkSega+M2Q7A1CZTkirW85ClYn2soVDdy4quQM1CYCBRVo6b/UuEI/gUuKsjJbu8plqYsYSTBLvgqhO5TQfK/p7ADE6lCTLxHYICpCdo9xPKeAFpY2QtaZV4JNMJ8SIrWXAk6oUbJnUhqqpUk4N8JDcCAPbqYFNqTSA8LlCr1g0I3ccARauUh0AmpYt1gZoe60yzyQmDjbGMgMNZh3tVOgiy6PwdxETAmCIBT/pAXAhWmipinxwydlNByRKbd32GH0kGH81OkSSAQP4vSiF0KxpmePY87WoMheIIYqYOK/6ZiYXoKdyrWUnZto2C1EwQWzFWKDWcFU2z0ag48VKHRH0uZuOhhkwHpmotbT6ZKuh0XxjB/cU3wCGBXo3xGPAYoMC9ZjSI0uhxWlQxMi9CNO6X+gXcIErBmAfAvJp0oKD52i4dhNh4yitvEmBGKjcCyvdsENdKThGJK7sJ6WOKy35RFvzGSEAG3ADynvGDqWcL3VoVbeJOV2UbdlWkxgL87l5lIDcamI42ptcQwIyHUIZF8IQtVaIPlR69FOwT+BoRANxoanxP0rEZUikcC+RFjGmIwzvRi9mzI1Z/3sMLlrauupL+xhycH63iTpjEe8JV8R87qXU3RkzCbS2svRTij77QnUOMoyUblIBsSr8DvkECbjqHaiQhEoQgzBT08I33NfbzsHRVpQDtnQ7LrMlAMQwt/9totw5xtORcIjkEOTVG26+iE0v1gQBOaYA7nx1Ul6l/DJF3ohyichQFsqaJx1WTgacioHUFAoo8mB14glYaXP6HMAAGgqwCw4gm/EDf5nOnPIP6zhOiUnX9gA0ZrjKXZMNPVATErYtJtNhAFh9kZMTBjfvBMDyii+4uR9EGgaZyIDod4fYh9XWa+paZsvfxMtSZe2IcUtps+P2vyQm71Yhs3llYaUNouKVWcQxEhoQxJMN2cWB/By9xa50NDVu5AU31+9E6aXBD3SVPzNByz5Qylp+N7TfvV7oV/2g/FuBrRdhz+l0WuCSsbRCe3I5/S5VQGzXygtLZg820TNsp9/yfVql6IQmwLp/wy8hMf7NQSQAnh2/eBd2oRbMVv4jVrlDQPUmY0q+AwNulVeVG2PG5ry2BsQAoGfKmoItK+ddMgr8tGctbQUY5jpc13wS+WJArkpDZulR6huiE2KXguuIWEJACr7ldYRpYuitQCFjXS9XKeU0G7kZaifTfputtCxYtAGbZ2IAxMzBIOt4ft7PfJ/BYY8YYTrQgqtPvmwMM/DGXScvUkEkxFC40Fs/bsQAowCSCc6gmJEF8QGbhUX2eplJdnt+8P13Phk8cK9gxe2XZbr6GsmODC8t+6AzSJHZGVBjKhNxMV0TUfS230HgnIxck6tcjPCF7EMTgwmtCRGSJobYI/yfy6KCVylUlrQHxtTOMWwGF0G6l7nfUHzbr/sGoMEuyyRWLPJmZIt2ykBndlVuSo3khjGu2GOVca9GjAY7pTPAGZtZnUhpWxoO2ipadvtfpcqBYTcjEe+THUpPcQNAxn5K4u7IyaPgNoLimJQgLb2LQQuhk/j6b6nlF6NiDhn3vO4Jl5ub29L7i0qYsJO46z4QQywqykDg74hBy0AcFaQ+uFnggShnn2dBMECcZsUCTyPtgz86QO7kSAlmzlF0wEDQmYtYafi1RwPRrnWD3TQzv4sH+IHeXVULIwgGhMdBYhgWcArxB5WUBqyhU5m5Y+SILP+TduZqC5vPcQj7OTxTkw7tdE4IuuU2lbQ4GUSxQjFluqHsToLTK3VixSOqJFB+TiAAEadZRMXKpYAz0rN59hr5u2BGDM3+IF9Mc5B3DA1PDPpwTPv0I6PklBAk5SJYX4EVhodmEKbAc0JbrVd8ybD19ejI+TEbwGV4KdCKwGYirS6IweVmdN2K9ALyZ8uJQsdgtpV+stZYcLJwCT7ClvF96O9+7GsbB0pgcz/UcigTm1VS51oMViUhpQCnNDBYHVCmeQSwofX058gn6h1aAsuWcZPl4x4K0mtGFOTEhzmjof6D7RiMcnuHKTCQtJT3mpqwp+wVJZRM7Tf5wQp+AEa7dZNGoM596KnM/h0TmmZ2qp8uSvKRC7QVmox6j7vbE0WMjZIaAi03AbFEGkPP07LbHsn4M38YjMnJVgBOZ+JIary6PecKcMQeZ5GDxjChsmXCp/91yjHjAoC1UnHT8rm03Ogd8j/Zongk8JGoGgNgFUD1d6aJEVBhElZBhRUA4uQGX2wD+xcTN6pM4cJ3hVakBiXNK6YTtoBA0a4NrjmuMM6bIQRoKnyl+wiHFJ/MY7CechvDFKTCLECucibBsMxJ9IyA/oS/bcSgke8YLjv/FIZkUozpudFkFga8NRxo6ZC91qcLcULwa4eSkyCETYBpqlSpQU4d3nQSwwABsZeIZFgeW0WwztZxw3mVRO+kTEzJwvGM65ZFQkkMZsvGzl17Q8iiZKtl7X66fDRDL687VIbT8WrpiGgblNtz05fZtg/ZECwgcrqYuKDao79pmzhb8XF4NS1pOOkcWTrJOAUtbnrpdbeRIIYu8B0EFLEuPyjRCSHI36+1Z7ah/oUzmRnkGDYrnfZ8IUDJva/TXRksjoKmigdQXaWP1w6FYsB0Pcvjj3XKmlLD+ixrb5UshROCKrp8A6bZKzEi2bCIiqbYU6bDxXpLw+NIAicwanPguo1Ax/sNXPqy1xfG5yI7tJKFZZVC+A4qJLfCk2qENTkb0EW/+oJ0dozG7oLpbkRXpbbw5/Sbdvky4YOZC/y1ipg7vcIP+ut+sblt9mqAxpiMKcAZp86OLWzJRVSU9rff1WfcAcWomigDkwcaHrpWqIkEwPrpf11tmBdxA5/5GxrJLjLafLgAxuGDbCNGrtFVabkv6wQjNQxx5XRGzDLuqkOC2A6EeMcYkBJR7R3GiTAtr8VHUg4fHfawpITd6o/dlD4DbFLfVzUsbTNeZ1tiWSUEudhNdeRIcUZws5aJfGe1T/FkNDPGBynLKDXsdthgeLg7YmKLT4N/AIess0XpY+aiGwACQ6tk2L+wm+IOiDzb+mlBzozO2Tv7Q++eKrYRR2yXZIMljRw6Ps9WnFt3u574fmPAVBqYsyHMsNMVA8OR75LGuLeF5f8hvEIjG4zcL8o8OJafZfjIy+4Z6cVu4o/Vu3hX3u63by8avq3ss4UiIZYuEQBBb1oIxtFu+3ZE+H61Obf3u+gZMC308xtixe3wDy/Be15+34hJ7lXshd/UB8hYcrG7hCVApuuLR9n0Mx+2p/SUGgX1y65kVUtrdYl1BxeRiUWCFldGOvsQGQDSfvGFY5j9unO2mcMB/caSbNU9YmOZhEVWLIghV/CKl7ZvBp2GbRXSx+xk5BWdSKJgSXTZJY7Hyx4EuJxsgu3KbCUqo+wUZBCv4MQ8E+VZsNwi8Fdoa2Z7/Q8PKnOV8ipH8q1/EIwl1qwr8N+7Y1gQzisxlDC2E0OyfrTwAXPj7LActuuPS26OESV1uiKAC/ED2YsXqhoCtVxhjp3aEslBImqRqQoyW77Xf3806tTeje3ag8sAthlVbyUGvuuOhP8uu8wIEnM7ohxN1i3B0BnARBp0RuzvBfyxJ+bOlZ8VJEq8Qgt5shUtnegs4VUsIgh5kmqWxGSjs3crPt9nOa20XQu9VTTYuM0GMWAIPQijvlqu3KZhd2b7iZoZNBj9wx/twI1unSulRhJeH8RvxVJqFFQyy7qbg54S/4MXGBBQmSooZZcWwNiLUcO6GKHN9lcgSwn/shMzdFERthB43yfGFlmw3Er+p/zgRh4Xgpi9aJcX9dfHlMg/i/oCPpRgjliQxfqFYL8UfiDplJ/vpy97Y1aaLVG97eg6sAaWBKzZt82ahVYyoncRxNjRO2LETsT+/NU91NhfbeidC+Vx77jsAd2MbIjIIY6idwg7iXSvN12XgahyNw9ss9FGd2WjlObcqEVsfgY9QDb/ronpt27cc+bQX0EywXEbyZ+DqMcXhWzvTMYeIeBn8gCtJKPgIBZHiUimCSMGYbXqlf8wLXPj7AM/N1CpH3BszuWiGtNhd7ZOQGRwkrvWL4qY/B0xhN8zgHHLt8UwM/5sVIZCrbcfTLWOCqsMGqdjE7WZMjVdAalcciDYmyvLW/hv+6fc1FOyFmLNRPpKTOncd4eZv4lP3FZiXiU4cD1SfCIvcPYJ1HA2OvdDbevAGKvq94Oixq2t1xKmyVhByLXq4AiMeN8bjWkBNqn4NhAJDS7lDALGrVWD8CXxFDHTe2KIbp90r46RdLzxZU/MqNCiaFoS9aXY0VIg/aMIbQQMC5EuYmti9vO4HdsTk7cXsZdeL/5VJDiqE04Php1Vmph6fEkM6QoV9Li9c9vjjJuR2gq168PnERmAYD+BKksEgjUU+IQ/iZPICvd7N77v5PCIkUEDoCG2MutEM2uuitpgMcNdVczG+p0kprCym/2UbdZCtsVF1WU2idnLuvvQftwRwoRLwDo5xe+HFlUpGQfVKRPZWyZF3QViYn8dCSEf249xNTo1/lsCtCr9WHfboijua3yYiBLEwHK9tA9GdmYEyOKuM1dOW2/PCRfahbtFrMSIlcr6RMMkYwZLJMvCG8PoMpQxjrLs8Msx2A1qt7ufZnAM+O+Cygc/aleD0VL5yTZiYplLkd7DraP2hBzSNdvEtFu2xzQgms3usausD7JciSKecWGmEwjOhOD1Is+USe/HPUUMFQde9SA22/0EzgnPyDLEjpw5W7cIAeSfzxpEIjF3WS5VZ1azfmRPwkYYXye2Cd8eg5niy34RmhjZEkYx8xW3Ark0FID/HGPclVn6GLJuxwMk2fbROnoQhu3HvuloE0UD5d01Gh791shDkQfJQNgqZnfVyFK2M5a9vPT6nFebAj13wLrr7jkt6XaLiLQ1AyMtxRqrZtHNwiYSYgkPAGT5awPw2igJOuO56wjRAKw/eXV7yV03p0MVul4bggFYcQCWRN184VQTo3Ly1URJt2BqueqeqNFzh8VlzrbHCgOwLSJedcZTO492Kxtw6wlGmrII4MqWRzTM2me9Nc2ZMM3DIA7LjqF/6dZeZSK6uMNsuXCRiW6IJgZQB52wcTQfD9SsXfpeb6Im0zS7W1Si7KeTiFSuKNBbKK8KP4wquaEDiIDv5/Faw2nGN8wkygqK/3Bdx+6riyO1gaiEWDyQL+Cm98TgHxGHZIdGe9HphiHXDzpNDK+kgkscgjVNkQNQuxJfVlIVMUc4s6uXZEuH08TCJRVX18IDGaiEIKpYM3FsiZXSQhEDOlpoLqBXqA85XMK6j8f/i63wfoQz+waWcAvdVHhJJH4Upx5EQkMmXSoZe97X+KF5DTS93y+ELp6VCmYV3zwdA1bfOoIC19lfcAsFQVdbJk23YxbYt/RxEDSsOtUe1lCNKvPs7H8MdwFiKqcTsbvsJJS5ZuFzZJshprFUbBcZIYAX7a5bQzRPurxuxeGDsHetwlFSn136EJBvQJ0U+II55sFWnNn1ZWeWu0MDeByCEuHGfWKEAPnnxYh21/SMq+/nETBM3tUlc83iehshgyJwVuas6L4cojwdnMmNIJxThCteBYAmddSeZb+kbkHLbGRt1l2wIjLYGG5koh1ZDby47WNLbbTj1N2GUlSPLsfgbA9u1uAszDBbLLIz37aMptypBXROtuPjTKqVuDajPHiMotIbNh+JJbbrGKKdUV3oYVJ298TqsVOww2SPIAY441fBZvAS2a4rfuBDXuiDIJVj9GhG2I++jUrzvypWtH8/JgGxA/WyCpwqzqaHhAbVaetif5oHb5PoYjSpK+Ny0eQxw8qFSmlisENOqw04M09nA51mC8c90D0jn0XtQ0JDmroHGjHRHEwe4DXl5kp+gD12RVwgD8tdFvGFQ6pp/dEzI0YgGGuUGV0NjYvLyUeb2W0Rq5JwCxrkaysjHcCoag5f9wGsTfcOAOLZZZ9qWvhNhrfCYIvEGRmxNCyJUTPaMZYiZMNp6qjk/iEJ2KgkoGfGJYp7YWAkPOuWOlfOSJBa32xJTI8ioi+hgJhbZrvNQyMgy/sqycGYrUnAjIvW7B5n7qxahcq6nOLkGZepTsv6pluYn9KzqufB5IxGPzVjW98rxPtO5ebjBRS/V8REF1BGlYrCwopMSHZmzwQ3jh6Xo1HTWNOzVzqJE1gQF5NJnV1Cr1gKX8k+QB9VluehleObbSTOM1VH8x5Gw5j2cXGwtaiC6f6Cc8XFo5bE/OFb0ZfItdR3kTMCszlGoc9iGubK8ZQ4V81hD9WzgL1Yv7oyS85iAYaEnOVcFczjSTdf55M6AiFvvUhGp38mhqw3fdXrqRk8LLzZDiSGAjHD4FqJMmHsw7MwJcAa44KG/DLtvYzbqMYsPZPzKberA1MlHtkR8msm0+XyNIw4jMQjitDVEvVB+UkrnER1M3t8ycKhzBIJm7zQ1Jm1ycSLmMwL4PmgnR3EMjISY621SAnNse+BjGzf//lgn/vFp7NjdGw/2B/i3wT2+1N070JQSDFOI7oHO24QULVEtc7Mqh3FwvMBo4jyxz59XC5jw7oyqZaLCUS227HSmeJJpGzk9r7CXk1dO+C+hbV2m8T2lZ8hG0qHRTJitBJXNjfLgCpPWQMxkoWI+1qyb+xOAtUUjrvnfyIxUlKvbArRmhLmYJMdxf/gx1Bk13NcAt1+OnKzA76OkBI3qQMdMRMGAEiZAkI2YhpK9ubAjRzDHCQaZVSYKbvLjcIORjLJFkxhn5KbqAEI4cLAQDfh5ajy5auOnpWYTep7wu8tP3bz4yEpDP7Xg+MMEEeiPA5dVjFLJt0dI0famiXNnk1yXVIL8b994Tf1SSq57FTUUD404/SpGQ+bGmrymhCxml2ThgsRMe2ODfRp9ftMNo4SbKIIdQpkd6VFQ8yWqZKZ1wjOuqkhEmsUkiVOA8iztqWl0mfpSOSx0HDtSMfxYK2Xd++pMe49KieBKfdMqaPZ3ssmJU2C56/sIzF5ZwRieD2DkUKLJ91tEQlMLMwVeF7VTlYDNlNnUXIq2tCt7FNQrXakcro8WSh9zqfsxq5nLp8JCFO78x11MBqNppTPNYRgESEammWKmDCgzGzEkR1K6yiwWrkjRoRXH1R1npUdZmeo7DEtLmKHC3koSLd1XEDOoksP8Op1Bn+7yAX8/qXqL7TT53jDa7cPWyhzlhJTJw2h/CrOwgDe+5ArLg5HQUD9zSPvEBlbe2IE274xKpkxUpEDUO1v7a+4pqs4FPSp2ftgc5iPtTWOy2tqdKQNfv9SQHhDOJGN3r5xWp454yAu0alGQsfUzW2O5/MyiViylo1Gm24MHnWv/snneusGGgDZwAg8KOQ2qrCZSEQSc5xL4JyNmAqDmKAGZ5P/j/PKrCnIkSItonDaOhC1ueAit0s0wbgP8l6XCikk2MgU4uHJcnZQ+MOGHY6C9I55ThVCG70qFbMiGSUVj57XfjN1Yzc6NnmvAln9sMsAfPYVRJJWnNXnqkNlF0UKGEYhXq8XBxN0Pgn14yoJ9gcuGx4Jt+sCjQs2oeP6ODevYvJgP4zettt2iKcWuR2R0CkEzp93kSa5iMPmqe44I/M6xRWgcvwhV1KfJ/FFSwTQsjskbvnwlfSLImVaxJ67ad/tOmoJpmJtVXUAyL2YDfjDgTFl52y5DEkMYk1RB7ip4ExPrL4oa/U76JrCEq1Beg5XNNyesAY7s0ZODr5SJhxIh0yBeC0OLk/oQaa+vomTUofTTBd6M37RULYijVgSozJ8sb5hx9LTOtIYq4rwVpiJF0CX7n1T8TNq2OMJw1iWRPuiMS/Oo6tuMzzbjHLkx6PPAZ8Mh5nN60U3njoWqojxBp1MsNZWF1GoUcRgCOTLUpZXcVJZuVa93j7tIGcde8YwghgQbK8MqHNT3SFnA/QG40tvB5hzRgNjsogyaR9cPB3d7ojpteQSa91qKk7EJbIDocAb5SQ3klY0tej658znM2oIeb4BTeSS2FfATwxh4ctuE1vGapZ/3TrdYFmmA50dFdnkaGSWjZh6q9Vb2arU4vSNvx5JcwOpKF4hTmllKrdRtuXAT5ZDbk8Hm/KLJCbpyHeIYRTTYfm0prau9GI2TH7VvadxgBSLdKgwANuxQsTJ1WpfsK9PnGUnCE693yblPmZkjfuQkualYXhM4UvWtE+XBKF+I2fwCog3xBAnAjktAXxo7AWhhNnYnsw6nV4zWRxTxITbOxTQpnqRo2UOJvR+E8RgON1cVHdUxFBc080o5M7ZkkjXG45Cfg6IwfCS4HVaZxwVtTavJqzLeludZgHFNVEaSIcKXUH+8D8q4dp7echBziJVKrzqtSGYFwe5MdXkNYz5mjUPbODe5u5lkHhcFDUbhRFriIuNPwVnvPT+ZJrFUxfccAA42GchFtRQI8EsusPUZa+VPDWEfRhblUTQoqxheNW8AVQt3uOBG+Q16w1k0TGHEqOX4gBazGXBWg+iVvbqyOUAAA4zSURBVHLwdCFyRghQ1p3xlPcl9sbjZI5s73fMm21AeFR2zrXluSo85Q3YLF5vf5OMQ0lyNbOIXYqDDZIYZqv2KDw3aNrddMSDk+FDw3gKiOWWNoxeHiZzks9IcMa+Wp6ATGeixp1GdVbgppUMrzwyJnGY8jEgEoIYn6PB8vURYqJ6yaVFjZTMsKBsRZJQAhvdRlxNRn+DheiIYozaM1GNaJv7HbvYq0/KLlfjzLnre4qYbMErgvLpVNQKcYQcgU1uM6MzG1NbXB0awAZfWWLDroxGH1RXZwpcSzV0FuqYF4sweYPRKRqf9YqagF7MB+BJs9YHiG9/dtO4aqvfdNQhQ2rsrCImnS/YsZw+FWf1CRcs26YAV49goLoQ7RcceTEDIHxYa6Mu6VYXlHmN1amgt74JE00foy05IywpU+ESrGA0zy17EeH3mcPC62JPZx503CFNmW4f9z4JNgJmLYDnWtyKcaBFp2iRmvlwohXb0KlK/YtEtYg+gRjSPWRFCaNwsb2OFemKh99swSQSo46nqxl7Rg836YbX6fx0ZtmMzGHttcr1gYYRINAg4ieKLQ/VERExDYdLrO0eYJG3MJ3OFnlx4fd9VRgXZ5fl5yvCrISvVetiPVu1EbMe0b6x6cB9TI12T24fH59HC+B7NgbXosx9QQxwJlk4EROGjRnlkbUOnKK3OjCmZ2uBWeIjjL1EYylGDzxQ2lRN2BKwMKp9d6ZaJ8jkaoC8ZhgTerhQL7th7mI5v8kuqaOFOniT+Vh4gjOAN9NooiKSq818z3pUtm4p66h53WC9E/BRNmWHKyADtkgBDPtJRDHgptdMV1iJu5kJNjjKJkSynmwqHcMnAuMufX+hzyBGDjfJqubBLl9+dwHjyl5WNwNbjvdpNobWECozyNVILhVggT01AHzXXJps7RHESATAb7mOaDBzGUqASiZVFfeShhHZQ684s545g7CBbBoiaHHxDsqnlN86vNBP0hKeB0G/6hON7w4mgXsTPaCbsVzgmyO95ya8YUM2xDnIpgskBnvwIegI9WKATNndUIumOj2BONqIBkVFNvYGy5ftnBNsmIi0vYpR+v6VX561I8ay7g6ELrlRRxC1M3BrTMIrxALrRWDU2a6hke5eELNQm7VrjCVO6Uo0p26acLR2uA+OmqJizl2MlHb65gx/Oy2bTYyNBip8HkjMqtYP3shAYzNmH+Iqs7VmVhGNM8FCbUdO4k/JGRSPka7t7rHQDFsfHCxl0oVRfQvHB58t/UA6787w2TJz7bd8u/Y0wba09+/8MYhxyU3frak5U7mDQ+l2JVplSx9d2/vT+ipNjE4z/lWXY9wPCRDXRKTWR8If6l7o4g8IYNTtV2jDvPUpeAgMaNlpDyjTBJAseSNrBjFW+Ydv7Y0zsZPRoUZdtoAZE+SWPgCDT+tVHxG2GqpQKwScJefYiltrwxSjTSYWVeY6VBAVqFhf5tEDwXhVn6km9Q2+GSUvuYPEbE4q+Ui3MERYZsbsQ5wK1JC85fpbIZ5VbWS+DbdFvrciLh+64LO/lHq1LoRPEU7r+fqXsrfum+5YibDvwj6qfByNnI9F+oKcB9kT4+YmMTZl7TGsQ6zImL6sN+5RqNQZUqzu48rDOljPgtN9nioOtjwq1vzkfkuTI2CMrw9uh7AMcn9edN1MnM39+QUni0GMFcbW7vof0Ivrydc+qDxSip9vMCcZaoMUqwfaa36VmFcUp7t8GOXydR0q8qEilLjps3PhlZH5gKBxuGVAHDZfz3zoQ5VLtvHbehk0s0/v4a9niMIkLXEgnq0ue5YQMbt2W6qYkMOtrdkeYVAq3lkghVTCcwhcNDXD5fxSYB/v1adjUDwZauSMAXt0PpAwwNdntwiV43q3ANAiTKgUFAHdwr7dZ73pcojWdykn8fcOcLU+qY5TZWy9b9WNXoGYOG8AL0/tkZ77kZhKzgyGJD+9hx805qIuSHUDJot/6jsQhOY3sl8se6IFy9ZmqwIomsQAAip5TJkCS16kfbivVI8wwdw4nTqQt23H78TelQrjssHDOuwyFv6pPXcjm+qkAzgIQhb8L3HkCAFJZMJUkWx5GrFxCTYEw1U+rWUQef2psmleySh78VIYz83uDF8sQ6buHskYDTjTyRscq+jR4dVN3KEfiXtu/MDtMbJlA4ktz+nKwtEffmDWVS6n176Lo3f7zxFneKxlEHll6GqTwJ8586mEyD9fRzzzyxjnX/5IFDFfLw7nDH7NWRu9BkAJfHXFR6J5RGSRpJpNH0byDXblXEJwVJ1xRQxvV8xtiZMLmz0H5MZZ/QbEhPUATJgmbK4DMwvEVGDTpmlconcvS3IrIHcNNWSFTKTvVP1hn0wFDj/evccFExL7j9urBUhl89PuGgWAHE83dx8pyspvRayIya9F/b1Xgvl3rO7qD9XykhxR6FPpvr0RI+OTrz2MrGmJWSAjMgRXR9Y351+0zGnzH3kbBBLzIy8Ci8uO03k1lKq4JytfkRlqUzrN0butVPWRLAo6CIg3gmRPnOrL2rVeZQ3h9Jq9BcxiDORHiHHBsHNd+7REf9b2xH3WHSIE0v6mWrtezeuWCq3FZRSMdL2+S/aTVOrs0u4WDa9oQZnfvedEjujdjWF6pIjv5l02Q7VzEtE+W29JZW63Ta/1Ln/5Wsv6Y8vm5VW0AINEV4AojcQaWc+7b2RXm5Pbd15WJoj5zkeSCCxKF+30OVHLF4fGXHn2hyHC2F+Tkp+85kON8LrHKW6CF/vaDpMXP3o6BjHu0XDrOwL49y8x/i4x8YDtNY1h5vT1FSLlmo6UMAegUp3u35ZWPV0CvRvpZ2e+KMH107KxOZdNtXKrRCJqt5CyBQjz6l1aYhSUfL4j5fppM3HX627oFm5xOwlEonwcsiQ29iwN3r0XAC9DAXt3+J0blyN26213Kpu3nXphZUPs+vnxkuM5pe2rv1npR4ebfnyPmXYoAtekzj0LDx9ImulYbj8M78rxtq4nV1TgAcFMFxCeZaaiF0rp/IrpnJ1fqw6C0gJQuDy/FKbUGoolkvB5QfUD7O333tAr0+UXejeZLg5u6EuVCTl5gVvZAl67sHvunahPOZ780nPLBTAaZY+T/R11jCDiXuNrll88HAdLFK/eCbAOmQ8AxjvjR4WvXtzNpF/yQ+YzUQV5mSi/8HuZxC8w5EZHnBQL3rQ9jaev+1IQ13xvNb7wMSvutmr0eCo6noxKIWxsDnPIcq2y7ZL1XN8qdM7fsArEyzR52+C3jlKuyUjlpeGcdm3z4hVpgTLL+h28Xujjt1rq8PXQ5Fm8+0zNZDhb7tiLfM2ntfZGHbondsMvmttIuHNx7EfTV3WeZ2ma4EjTLM/rKmoetnzb6a15+YY0X15MpnBtnOZV8yBAx7577cUrcJ6osc1qEABtbj+uXyEqVNXPt7uC138Ch8QJVUa6sX3ccDza0RZHS/Elp/jqtne2XLwdlaIX8euvwBB+vE2Uzeflh+eh34xiEMTY2BSp3whMQI72+0hQXhZRs7TyVbQXHOLUbdcG+D7d7DvvN5V9YlMV1oAT+UmXm3ky/f3Ib6cdJYzM10qI88mbPp+XFINg1eXXr0WP42v1tazzo+M7HeLqNTJFoFrPt6Iiy/j1R0C4Hkl0etki+KB2EZ3Ef+pV357rnhnsl0NcvWjDk047Dwnvqj/3+ka3bk/bKXR0xN5cNfuzQ8P98+tEKTt9oer7EVaTczqbnLL98zP+6CjJMajcPRfiwf9sG6vROb821sZrd/4u1rxqsiMErMmrG65/ZCSAAvE8KNamiDFo98Qaz9sdUndfgYDDh56VqeTqEba9/wfG+A6a/xg9VTN/fnaYaRGjU2N/JTW+WDor++v90ckbEJg9PoKoTH2z9ST2s+q6CJQgbksYH/ehyOFTO7CQtfoR0/bIz3YZ6r/q7c3ghMuqgFGBeU1xZKUMSyHiyUp85TdHD60vAUbW4W/spc9l74kHkdFVwJHDh+BTpA36OpVG2yuHOgPMkGV1WYlHlvDz3/OScHP4EIvesR/j1a0lCB5GAGp+XmDM+uJjgnAKkX399676NWtjkKsAGPLSRKxLZXwMbP6K3k2/YS5B0GvF+ElBy05hLSaNg9b+DiEIgWS1i+johL24VXsjiHVzo26rf3rqD74Q9OXwi3uf7bcqTMuouYEO03MDqukAuRnn+7UZ5Z6LlxI8rgjX+BNqPHyVEkCiTVEbNV+/vgbnrxX+E8Otxmm+NwOqYnQNbvMnGKz3IoMg+x6hGsf5gnHeeC0CW7wMPYFoBuwF4vn3PKV0Gtv51gx9AVZgaG7zqzadPzfS5QL7iiZSbtt7HQGWPPpMBWYNoGbykfkuBFcQIzP7UyTtwUTn1/H1reGSICLu3gfDPE3gLtnbZOyPD6+cNj/2dlDHeVTrC+VrCmsY1lt0RfesOlOF4NMfRucHzILw0M7bdP+fHD1l7ynBJ3Kyfxuzuzh0dyGHGNnIqLr0TIy4aFFk3xMEduTklb4/NYpxIi/u90dC7Kn72CNA4CajJ2v4Rilf9sFIWC2dmPl0anG7+4+8B/jPjrxp8bFUS5wUAPh5Gj+X3hSDcKCH8+N6ZJ+w0aa99+ormhVKqQaBtp66+5zfFNl+bmRFE8ztKHFT142fYHCCjyJ7flkoo9OLvF+80N1bP/UQiYPbfm6c+lr9XZToxawwrSrz9LT/J59BxF5mCcIANr05W6WbIiCTc9fZu9ai/71RjezlO6pxhA2YuecTKv+Vo+9Ajd5WG7FVh529q+q/bkSovO87HUWel33+DUbqLx6ROKr/PW+NeV76X08N5m/VfbxvR/SDn/snRyEg/ndLDZa4L4jwv5ia/w+bNNrzZJkSxQAAAABJRU5ErkJggg=="
              alt="WHO"
              className="img-fluid w-25"
            />
          </Col>
          <Col md={4} className="text-center mb-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="UNESCO"
              className="img-fluid w-25"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
