'use strict';

let { init } = require('z3-solver');

let mod;
window.run = async str => {
  if (mod == null) {
    mod = await init();
  }
  let { em, Z3 } = mod;
  let cfg = Z3.mk_config();
  let ctx = Z3.mk_context(cfg);

  try {
    output.value = await Z3.eval_smtlib2_string(ctx, str);
  } catch (e) {
    output.value = `FAILED: ${e.message}`;
  }

  Z3.del_context(ctx);
};
