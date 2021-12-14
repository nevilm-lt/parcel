import assert from 'assert';
import path from 'path';
import {bundle, outputFS} from '@parcel/test-utils';

describe('tailwind', function () {
  it('should support tailwind via SCSS', async function () {
    let fixture = path.join(__dirname, '/integration/tailwind-scss');
    let b = await bundle(path.join(fixture, 'index.html'));

    let css = await outputFS.readFile(
      b.getBundles().find(b => b.type === 'css'),
      'utf8',
    );
    assert(css.includes('.p-2'));
    assert(!css.includes('.m-2'));
  });
});
