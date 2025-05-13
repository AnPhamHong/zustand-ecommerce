import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const QA_DATA = [
  {
    key: "tab_01",
    title: "🛒 Ordering Questions",
    lstQandA: [
      {
        q: "How do I place an order?",
        a:
          "Simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the instructions to complete your order.",
      },
      {
        q: "Do I need an account to place an order?",
        a:
          "No, you can check out as a guest. However, creating an account helps you track orders and save your information for future purchases.",
      },
      {
        q: "Can I modify or cancel my order after placing it?",
        a:
          "Please contact our support team as soon as possible. If your order hasn’t been processed, we may be able to change or cancel it.",
      },
      {
        q: "Can I buy multiple products in one order?",
        a:
          "Yes, you can add as many products as you like to your cart before checking out.",
      },
    ],
  },
  {
    key: "tab_02",
    title: "🚚 Shipping & Delivery",
    lstQandA: [
      {
        q: "How long does delivery take?",
        a:
          "Standard delivery takes 3–7 business days. Express options are available at checkout.",
      },
      {
        q: "Can I track my order?",
        a:
          "Yes, once your order ships, we’ll send you a tracking link via email.",
      },
      {
        q: "Do you ship internationally?",
        a:
          "Yes, we ship to many countries worldwide. Shipping fees and delivery times vary by location.",
      },
      {
        q: "What if my package is delayed or lost?",
        a:
          "Please contact our customer service team with your order number. We’ll help investigate and resolve the issue.",
      },
    ],
  },
  {
    key: "tab_03",
    title: "💳 Payment & Refunds",
    lstQandA: [
      {
        q: "What payment methods are accepted?",
        a:
          "We accept Visa, MasterCard, Discover, American Express, and PayPal.",
      },
      {
        q: "Is it safe to pay online?",
        a:
          "Absolutely. We use SSL encryption and secure gateways to protect your payment details.",
      },
      {
        q: "Can I get a refund?",
        a:
          "Yes, we offer refunds for eligible returns within our return policy period.",
      },
      {
        q: "How long does a refund take?",
        a:
          "Once approved, refunds typically take 5–7 business days to appear in your account.",
      },
    ],
  },
  {
    key: "tab_04",
    title: "📦 Returns & Exchanges",
    lstQandA: [
      {
        q: "What is your return policy?",
        a:
          "You can return items within 30 days of receipt if they’re unused and in original packaging.",
      },
      {
        q: "How do I return a product?",
        a:
          "Contact our support team for a return authorization and follow the instructions provided.",
      },
      {
        q: "Can I exchange an item?",
        a:
          "Yes, exchanges are possible for items of the same value. Contact us to arrange an exchange.",
      },
      {
        q: "Do I have to pay for return shipping?",
        a:
          "In most cases, return shipping costs are the customer’s responsibility unless the product was defective or incorrect.",
      },
    ],
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        height: 300,
        borderRadius: "1rem",
      }}
    >
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        scrollButtons
        allowScrollButtonsMobile
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {QA_DATA.map((tab) => (
          <Tab key={tab.key} label={tab.title} style={{ fontWeight: 600 }} />
        ))}
      </Tabs>
      {QA_DATA.map((items, idx) => (
        <TabPanel key={items.key} value={value} index={idx}>
          <Box className="scrollablePanel">
            {items.lstQandA?.map((child, idxChild) => (
              <div key={idxChild}>
                <span style={{ fontWeight: 600 }}>
                  {idxChild + 1}. {child.q}
                </span>
                <span>{child.a}</span>
              </div>
            ))}
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
}
