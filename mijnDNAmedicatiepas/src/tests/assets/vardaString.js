const vardaVariantString = ['NC_000005.9	165180742	165180743	2	-1	1	C', 'NC_000005.9	165180751	165180752	2	-1	1	C', 'NC_000005.9	165507698	165507699	2	-1	1	C', 'NC_000005.9	165518998	165518999	2	-1	1	A', 'NC_000005.9	165519009	165519010	2	-1	1	C', 'NC_000005.9	165558708	165558709	2	-1	1	C']
const vardaCoverageString = ['NC_000001.10	65092390	65092415	2', 'NC_000001.10	65093556	65093586	2', 'NC_000001.10	65094053	65094306	2', 'NC_000001.10 65107387	65107389	2', 'NC_000001.10	65107732	65107778	2', 'NC_000001.10	65115318	65115325	2', 'NC_000001.10	65115364	65115383	2']

const testParsedVariantVarda = [
  { chrom: 'NC_000005.9', start: '165180742', end: '165180743', ploidy: '2', phase_set: '-1', inserted_length: '1', inserted_sequence: 'C' },
  {	chrom: 'NC_000005.9', start: '165180751',	end: '165180752',	ploidy: '2', phase_set: '-1',	inserted_length: '1',	inserted_sequence: 'C' },
  {	chrom: 'NC_000005.9',	start: '165507698',	end: '165507699',	ploidy: '2', phase_set: '-1',	inserted_length: '1',	inserted_sequence: 'C' },
  {	chrom: 'NC_000005.9',	start: '165518998',	end: '165518999',	ploidy: '2', phase_set: '-1',	inserted_length: '1',	inserted_sequence: 'A' },
  {	chrom: 'NC_000005.9',	start: '165519009',	end: '165519010',	ploidy: '2', phase_set: '-1', inserted_length: '1', inserted_sequence: 'C' },
  {	chrom: 'NC_000005.9',	start: '165558708',	end: '165558709',	ploidy: '2', phase_set: '-1', inserted_length: '1',	inserted_sequence: 'C' }
]

const testParsedCoverageVarda = [
  {	chrom: 'NC_000001.10', start: '65092390',	end: '65092415', ploidy: '2' },
  {	chrom: 'NC_000001.10', start: '65093556', end: '65093586', ploidy: '2' },
  {	chrom: 'NC_000001.10', start: '65094053',	end: '65094306', ploidy: '2' },
  { chrom: 'NC_000001.10 65107387', start: '65107389', end: '2' },
  {	chrom: 'NC_000001.10', start: '65107732',	end: '65107778', ploidy: '2' },
  {	chrom: 'NC_000001.10', start: '65115318',	end: '65115325', ploidy: '2' },
  {	chrom: 'NC_000001.10', start: '65115364',	end: '65115383', ploidy: '2' }
]

module.exports = {
  vardaVariantString,
  vardaCoverageString,
  testParsedVariantVarda,
  testParsedCoverageVarda
}
