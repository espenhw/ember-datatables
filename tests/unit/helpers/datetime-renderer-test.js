import { expect } from 'chai';
import { describe, it } from 'mocha';
import { datetimeRenderer } from 'ember-datatables/helpers/datetime-renderer';

describe('Unit | Helper | datetime renderer', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = datetimeRenderer(42);
    expect(result).to.be.ok;
  });
});

