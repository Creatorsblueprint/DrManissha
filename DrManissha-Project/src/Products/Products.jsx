import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import styles from "./Products.module.css";

const CollapsibleIngredients = ({ ingredients }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const list = ingredients.split(', ');
  const limit = 5;
  const hasMore = list.length > limit;
  
  const displayedText = isExpanded || !hasMore
    ? ingredients
    : list.slice(0, limit).join(', ') + '...';

  return (
    <div 
      className={styles.subIngredientsBox} 
      onClick={() => hasMore && setIsExpanded(!isExpanded)}
      style={{ cursor: hasMore ? 'pointer' : 'default' }}
    >
      <h6 className={styles.subIngTitle}>
        Ingredients {hasMore && <span className={styles.expandToggle}>({isExpanded ? 'Show Less' : 'Show More'})</span>}
      </h6>
      <p className={styles.subIngList}>
        {displayedText}
      </p>
    </div>
  );
};

const Products = () => {
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const basePrice = 189;
  const totalPrice = basePrice + Number(deliveryFee);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (deliveryFee === 0) {
      alert("Please select a delivery location");
      return;
    }

    // Direct payment logic for individual product
    const UAE_LINK = "https://pay.ziina.com/houseofmanetraa/JeaGEuPYU";
    const INTL_LINK = "https://pay.ziina.com/houseofmanetraa/H7TiFSfuA";

    if (deliveryFee === "30") {
      window.location.href = UAE_LINK;
    } else if (deliveryFee === "180") {
      window.location.href = INTL_LINK;
    }
  };

  return (
    <section id="products" className={styles.productsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <span className={styles.kicker}>House of M</span>
          <h2 className={styles.title}>Ancestral wisdom, modern science.</h2>
        </motion.div>

        {/* Product 1: The New Kit */}
        <motion.div
          className={styles.kitProductSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className={styles.kitGrid}>
            <div className={styles.kitImageCol}>
              {/* <div className={styles.badge}>Pre-Sale Special</div> */}
              <div className={styles.kitImageWrapper}>
                <img
                  src="/Images/product_kit.PNG"
                  alt="Manetraa by House of M — Ancient Ayurvedic Rituals Kit"
                  className={styles.kitImage}
                />
              </div>
            </div>

            <div className={styles.kitInfoCol}>
              <span className={styles.category}>COMPLETE AYURVEDIC RITUAL KIT</span>
              <h3 className={styles.kitMainTitle}>
                Manetraa by House of M — Ancient Ayurvedic Rituals for Hair, Hormones & Inner Glow
              </h3>

              <div className={styles.priceContainer}>
                <span className={styles.presalePrice}>760 AED</span>
                <span className={styles.priceNote}>Retail Price</span>
              </div>

              <div className={styles.clientOfferBox}>
                <span className={styles.clientOfferBadge}>Special Offer</span>
                <p className={styles.clientOfferText}>
                  <strong>555 AED</strong> for previous clients or discovery/consultation call bookings (claim via WhatsApp).
                </p>
              </div>

              <p className={styles.prodDesc}>
                Manetraa is a four-part ritual kit rooted in Ayurveda, designed to work with your body’s hormonal rhythm rather than against it. Each formulation targets a different layer of the Hair Hormone Method™️ — from root nourishment to nervous system regulation.
              </p>

              <div className={styles.qualityBanner}>
                <strong>Rooted in Ayurveda. Backed by Global Quality Standards.</strong>
                <p>Every House of Manetraa product is manufactured in an ISO-certified Ayurvedic facility in India, where time-honored herbal wisdom meets rigorous quality control, safety testing, and manufacturing excellence.</p>
              </div>

              <div className={styles.purchaseActions}>
                <a
                  href="https://pay.ziina.com/houseofmanetraa/EUMR6GioC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.kitBuyBtn}
                >
                  Buy Now
                </a>
                <a
                  href="https://wa.me/971589771786?text=Hi%20Dr%20Manissha,%20I'm%20a%20previous%20client/have%20taken%20a%20call%20and%20would%20like%20to%20claim%20the%20Manetraa%20Rituals%20Kit%20for%20AED%20555."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappPresaleBtn}
                >
                  <i className="ri-whatsapp-line"></i> Claim Client Price
                </a>
              </div>

              <p className={styles.whatsappNote}>
                Previous client or took a discovery/consultation call? Reach out directly via WhatsApp to claim the AED 555 special pricing.
              </p>
            </div>
          </div>

          {/* Sub-products listing in the kit */}
          <div className={styles.whatsInsideSection}>
            <h4 className={styles.whatsInsideTitle}>What's Inside the Kit</h4>
            <p className={styles.whatsInsideSubtitle}>
              Together, these four rituals form a complete daily Dinacharya for hair and hormone health — because real hair transformation starts inside the body, not on the scalp.
            </p>
            <div className={styles.subProductsGrid}>
              {/* Kit Item 1 */}
              <div className={styles.subProductCard}>
                <div className={styles.subProductImageWrapper}>
                  <img src="/Images/kit_1.PNG" alt="Luxury Hair & Beard Oil" className={styles.subProductImg} />
                </div>
                <h5 className={styles.subProductTitle}>Luxury Hair & Beard Oil</h5>
                <p className={styles.subProductDesc}>
                  A restorative blend that nourishes follicles at the root for stronger, denser growth over time.
                </p>
                <CollapsibleIngredients ingredients="Cold-Pressed Coconut Oil, Extra Virgin Olive Oil, Sweet Almond Oil, Jamaican Black Castor Oil, Cold-Pressed Pumpkin Seed Oil, Cold-Pressed Black Seed Oil, Neem Seed Oil, Bhringraj Leaf Extract, Brahmi Leaf Extract, Amla Fruit Extract, Ashwagandha Root Extract, Shikakai Bark Extract, Tulsi Leaf Extract, Fenugreek Seed Extract, Mahabrahmi Complex (Centella + Brahmi), Sesame Oil, Rosemary Leaf CO2 Extract, Rosemary Essential Oil, Tea Tree Essential Oil, Peppermint Essential Oil, Cedarwood Essential Oil, Vitamin E (Tocopherol)" />
              </div>

              {/* Kit Item 2 */}
              <div className={styles.subProductCard}>
                <div className={styles.subProductImageWrapper}>
                  <img src="/Images/kit_2.PNG" alt="Nabhi Chikitsa Navel Oil" className={styles.subProductImg} />
                </div>
                <h5 className={styles.subProductTitle}>Nabhi Chikitsa Navel Oil</h5>
                <p className={styles.subProductDesc}>
                  An ancient navel-healing ritual oil, working on the body’s energetic center to support hormonal and digestive balance.
                </p>
                <CollapsibleIngredients ingredients="Cold-Pressed Sesame Oil, Jamaican Black Castor Oil, Cold-Pressed Flaxseed Oil, Moringa Seed Oil, Ashwagandha Root Extract, Shatavari Root Extract, Triphala Extract, Guduchi Extract, Manjistha Root Extract, Vidari Kanda Extract, Ginger Essential Oil, Fennel Essential Oil, Vetiver Essential Oil, Vitamin E (Tocopherol)" />
              </div>

              {/* Kit Item 3 */}
              <div className={styles.subProductCard}>
                <div className={styles.subProductImageWrapper}>
                  <img src="/Images/kit_3.PNG" alt="Gandusha Oil Pulling Ritual" className={styles.subProductImg} />
                </div>
                <h5 className={styles.subProductTitle}>Gandusha Oil Pulling Ritual</h5>
                <p className={styles.subProductDesc}>
                  A detoxifying oil-pulling blend that brightens and strengthens from within, drawing on a centuries-old Ayurvedic oral care practice.
                </p>
                <CollapsibleIngredients ingredients="Cold-Pressed Sesame Oil, Cold-Pressed Coconut Oil, Clove Bud Extract, Neem Leaf Extract, Triphala Extract, Licorice Root Extract, Turmeric CO2 Extract, Spearmint Essential Oil, Clove Bud Essential Oil, Cardamom Essential Oil, Fennel Essential Oil, Vitamin E (Tocopherol)" />
              </div>

              {/* Kit Item 4 */}
              <div className={styles.subProductCard}>
                <div className={styles.subProductImageWrapper}>
                  <img src="/Images/kit_4.PNG" alt="Hair Ittar Perfume" className={styles.subProductImg} />
                </div>
                <h5 className={styles.subProductTitle}>Hair Ittar (Perfume)</h5>
                <p className={styles.subProductDesc}>
                  Botanical hair perfume with UV-shield actives to protect your strands all day, staying clean of the hormone-disrupting chemicals hiding in most fragrances.
                </p>
                <CollapsibleIngredients ingredients="Fractionated Coconut Oil (MCT), Argan Oil, Meadowfoam Seed Oil, Raspberry Seed Oil, Jojoba Oil, Sandalwood Oil (Chandan), Amla CO2 Extract, Hibiscus Flower Extract, Brahmi Leaf Extract, Bergamot Essential Oil (FCF), Pink Pepper Essential Oil, Clary Sage Essential Oil, Jasmine Sambac Absolute, Rose Absolute, Neroli Essential Oil, Sandalwood Oil, Cedarwood Essential Oil, Vetiver Essential Oil, Ambrette Seed Absolute, Vitamin E (Tocopherol), Rosemary CO2 Extract" />
              </div>
            </div>
          </div>
        </motion.div>


        {/* Existing Products list */}
        <div className={styles.otherProductsSection}>
          <h3 className={styles.sectionDividerTitle}>Individual Formulations</h3>
          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className={styles.productCard} variants={fadeIn}>
              <div className={styles.imageWrapper}>
                <img
                  src="/Images/product1.png"
                  alt="Signature Ayurvedic Blend"
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.prodTitle}>
                  Manetraa - Hand Crafted Signature Ayurvedic Blend
                </h3>

                <span className={styles.category}>HAIR RESTORATION OIL</span>

                <p className={styles.price}>{basePrice} AED</p>

                <p className={styles.prodDesc}>
                  Infused with hand-selected herbs and pure essential oils to
                  activate marma points and stimulate hair follicles.
                </p>

                <div className={styles.ingredientsBox}>
                  <h4 className={styles.ingTitle}>Ingredients</h4>
                  <p className={styles.ingList}>
                    Cold pressed coconut oil, Olive oil, Almond oil, Castor oil,
                    Black onion seed oil, Fenugreek oil, Rosemary leaf extract,
                    Rosemary Essential Oil, Tea tree Essential Oil, Peppermint
                    Essential Oil, Brahmi leaf extract, Shikakai bark extract,
                    Tulsi leaf extract, Bhringraj leaf extract, Ashwagandha root
                    extract, Amla fruit extract, Pumpkin seed oil, Saw palmetto
                    fruit extract, Saffron.
                  </p>
                </div>

                <form className={styles.purchaseForm} onSubmit={handlePayment}>
                  <h4 className={styles.formHeader}>Get Yours Today</h4>
                  <select
                    className={styles.selectField}
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                    disabled={isLoading}
                    required
                  >
                    <option value="0">Select Delivery Location</option>
                    <option value="30">UAE Delivery (+30 AED)</option>
                    <option value="180">Outside UAE (+180 AED)</option>
                  </select>

                  {deliveryFee > 0 && (
                    <p className={styles.totalPrice}>Total: {totalPrice} AED</p>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isLoading || deliveryFee === 0}
                  >
                    {isLoading ? "Processing..." : "Buy Now"}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Affiliate Product Card Section */}
        <div className={styles.affiliateSection}>
          <h3 className={styles.sectionDividerTitle}>Recommended Diagnostics</h3>
          <motion.div
            className={styles.affiliateCardWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className={styles.affiliateCard}>
              <div className={styles.affiliateImageCol}>
                <div className={styles.affiliateImageWrapper}>
                  <img
                    src="/Images/valeo_logo.png"
                    alt="Valeo Hair Hormone Test Toolkit"
                    className={styles.affiliateImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles.affiliateImageFallback} style={{ display: 'none' }}>
                    <i className="ri-shield-flash-line"></i>
                  </div>
                </div>
              </div>
              <div className={styles.affiliateInfoCol}>
                <span className={styles.category}>PARTNER DIAGNOSTICS</span>
                <h3 className={styles.affiliateTitle}>Valeo Hair & Hormone Test Toolkit</h3>
                <p className={styles.affiliateDesc}>
                  A comprehensive, at-home bloodwork test designed to analyze your primary hair and hormone biomarkers. This test is highly recommended as a preliminary step to gather biological data before scheduling your one-on-one consultation with Dr. Manissha.
                </p>
                <div className={styles.affiliateFeatures}>
                  <div className={styles.featureItem}>
                    <i className="ri-checkbox-circle-line"></i>
                    <span>Checks key thyroid & hormone biomarkers</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="ri-checkbox-circle-line"></i>
                    <span>Easy at-home sample collection</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="ri-checkbox-circle-line"></i>
                    <span>Comprehensive digital lab report</span>
                  </div>
                </div>
                <a
                  href="https://feelvaleo.com/en-ae/dubai/services/hair-hormone-test-toolkit?utm_source=Affiliate&utm_medium=Dr%20Manissha&utm_campaign=hair_hormone_test_campaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.affiliateBtn}
                >
                  Order Test Toolkit <i className="ri-external-link-line"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
