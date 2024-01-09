import React, { useEffect, useState } from "react";
import sections from "../util";
import { MdOutlineExpandMore } from "react-icons/md";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Materials({ section }) {
  const items = sections[section];
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    for (let index = 0; index < items.length; index++) {
      setExpanded((prev) => [false, ...prev]);
    }
  }, [section]);

  function handleClick(index) {
    setExpanded((prev) => {
      let values = [...prev];
      let value = prev[index];
      value = !value;
      values[index] = value;
      return values;
    });
  }
  //LayoutGroup for animating parent rearranging as sibling is removed from DOM
  return (
    <LayoutGroup>
      <motion.ul className="items-container">
        {items.map((item, index) => (
          <div key={item.title}>
            <motion.div
              className="items"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <li className="main-list-items">{item.title}</li>
              <motion.div
                className="icon-container"
                animate={expanded[index] ? { rotate: 180 } : { rotate: 0 }}
                transition={{type:'tween'}}
              >
                <MdOutlineExpandMore
                  className="expand-icon"
                  onClick={() => handleClick(index)}
                />
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              {expanded[index] && (
                <motion.ul
                  className="sub-container"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, type: "just" }}
                  // exit={{ opacity: 0, y: -10 }}
                  layout //For different child to not move around
                >
                  {item.links.map((link, i) => (
                    <li className="sub-items" key={`${item.title + " " + i}`}>
                      <motion.a
                        href={link}
                        className="link-items"
                        whileHover={{
                          textDecoration: "underline",
                        }}
                      >
                        Part {i + 1}
                      </motion.a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.ul>
    </LayoutGroup>
  );
}
