/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {type} from '..';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Tokens',
});

export const Type = () => {
  const inverseStyle = {
    display: 'inline-block',
    background: '#667380',
    padding: '2px 8px',
    borderRadius: '3px',
  };

  return (
    <div>
      <section className="story">
        <h1 style={type.brand1}>Brand 1 Header</h1>
        <h2 style={type.brand2}>Brand 2 header</h2>
        <h1 style={type.h1}>H1 Header</h1>
        <h2 style={type.h2}>H2 Header</h2>
        <h3 style={type.h3}>H3 Header</h3>
        <h4 style={type.h4}>H4 Header</h4>
        <h5 style={type.h5}>H5 Header</h5>
      </section>
      <section className="story">
        <h2 style={type.h2}>Body Text</h2>
        <p style={type.body}>
          <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <p style={type.body2}>
          <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <p style={type.small}>
          <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
      </section>
      <section className="story">
        <h2 style={type.h2}>Text Variants</h2>
        <span css={[type.body, type.variant.button]}>Button Text</span>
        <br />
        <span css={[type.body, type.variant.caps]}>Caps Text</span>
        <br />
        <label css={[type.body, type.variant.label]}>Label Text</label>
        <br />
        <span css={[type.body, type.variant.hint]}>Hint Text</span>
        <br />
        <span css={[type.body, type.variant.error]}>Error Text</span>
        <br />
        <a href="#" css={[type.body, type.variant.link]}>
          Link Text
        </a>
        <br />
        <span css={[type.body, type.variant.inverse, inverseStyle]}>Inverse Text</span>
        <br />
        <span css={[type.body, type.variant.mono]}>Mono Text</span>
      </section>
    </div>
  );
};
