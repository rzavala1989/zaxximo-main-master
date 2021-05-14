import React from 'react';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';

const InfoCard = () => {
  return (
    <Collapsible accordion={false}>
      <CollapsibleItem
        expanded={false}
        header="Better safe than sorry. That's my motto."
        icon={<Icon>filter_drama</Icon>}
        node='div'
      >
        We exist because we have made it a habit to disregard routine cleaning
        tasks
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header='You guys seem relentless; will you ever stop?'
        icon={<Icon>place</Icon>}
        node='div'
      >
        Can't stop, won't stop
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header='Why is task management important?'
        icon={<Icon>whatshot</Icon>}
        node='div'
      >
        Without giving too much away, it is the difference between and ordely
        and miserable workplace
      </CollapsibleItem>
    </Collapsible>
  );
};

export default InfoCard;
